import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Rotate3d, Play, Pause, User, ArrowRight, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Model4D() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isRotating, setIsRotating] = useState(true);
  const [activeProfile, setActiveProfile] = useState('Front Profile (0°)');
  const [activeAngleDeg, setActiveAngleDeg] = useState(0);
  const [useRealPhoto, setUseRealPhoto] = useState(false);

  const sceneRef = useRef(null);
  const modelGroupRef = useRef(null);
  const isRotatingRef = useRef(true);
  const targetRotationYRef = useRef(null);
  const frontMatRef = useRef(null);
  const texturesRef = useRef({});

  // Sync rotation state with ref
  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);

  // Toggle between 3D avatar & Real uploaded photo on front view
  useEffect(() => {
    if (frontMatRef.current && texturesRef.current.front3d && texturesRef.current.realPhoto) {
      frontMatRef.current.map = useRealPhoto ? texturesRef.current.realPhoto : texturesRef.current.front3d;
      frontMatRef.current.needsUpdate = true;
    }
  }, [useRealPhoto]);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const width = containerRef.current.clientWidth || 400;
    const height = 460;

    // 1. Three.js Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 4.2);

    // 3. Renderer with transparent alpha background (100% frameless)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;

    // 4. Clean, Natural 3D Lighting (illuminates all profiles vibrantly)
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
    scene.add(ambientLight);

    // Key Light from front
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
    keyLight.position.set(2, 3.5, 4);
    scene.add(keyLight);

    // Right Side Light for illuminating the side profile
    const rightLight = new THREE.DirectionalLight(0x38bdf8, 1.5);
    rightLight.position.set(4, 1, 0);
    scene.add(rightLight);

    // Left Side Light for illuminating the left profile
    const leftLight = new THREE.DirectionalLight(0x34d399, 1.5);
    leftLight.position.set(-4, 1, 0);
    scene.add(leftLight);

    // Rim Light from rear for silhouette edge definition
    const rimLight = new THREE.DirectionalLight(0x818cf8, 1.5);
    rimLight.position.set(0, 2, -4);
    scene.add(rimLight);

    // Interactive Point Light tracking cursor/touch
    const pointLight = new THREE.PointLight(0x38bdf8, 2.2, 10);
    pointLight.position.set(0, 1, 3);
    scene.add(pointLight);

    // Master Model Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);
    modelGroupRef.current = masterGroup;

    // 5. Texture Loading (Front 3D, Real Photo, Right Profile, Back View, Left Profile)
    const textureLoader = new THREE.TextureLoader();

    const base = import.meta.env.BASE_URL || '/';
    const frontTex = textureLoader.load((portfolioData.personal.avatarFront || `${base}model-3d-front.png`) + '?v=3');
    const realPhotoTex = textureLoader.load((portfolioData.personal.avatarReal || `${base}model-real-photo.png`) + '?v=3');
    const rightTex = textureLoader.load((portfolioData.personal.avatarRight || `${base}model-3d-side-right.png`) + '?v=3');
    const backTex = textureLoader.load((portfolioData.personal.avatarBack || `${base}model-3d-back.png`) + '?v=3');
    const leftTex = textureLoader.load((portfolioData.personal.avatarLeft || `${base}model-3d-side-left.png`) + '?v=3');

    [frontTex, realPhotoTex, rightTex, backTex, leftTex].forEach((t) => {
      t.minFilter = THREE.LinearFilter;
      t.magFilter = THREE.LinearFilter;
    });

    texturesRef.current = {
      front3d: frontTex,
      realPhoto: realPhotoTex,
      right: rightTex,
      back: backTex,
      left: leftTex
    };

    // 6. Build True 360° Volumetric Profiles with Matching Dimensions & DoubleSide Visibility
    const modelH = 3.2; // Prominent, big, and clear
    const modelW = 2.5; // Matches 1024x1024 canvas proportions perfectly
    const depthOffset = 0.08; // Small spatial spacing to give 3D depth without gaps

    const createProfileMesh = (texture, pos, rotY) => {
      const geom = new THREE.PlaneGeometry(modelW, modelH);
      const mat = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        alphaTest: 0.05,
        roughness: 0.45,
        metalness: 0.02,
        side: THREE.DoubleSide, // Guarantees the mesh NEVER gets culled by backface culling!
        depthWrite: true
      });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(pos.x, pos.y, pos.z);
      mesh.rotation.y = rotY;
      return { mesh, mat };
    };

    // 1. Front Profile (normal: +Z, rotY = 0)
    const front = createProfileMesh(useRealPhoto ? realPhotoTex : frontTex, { x: 0, y: 0, z: depthOffset }, 0);
    masterGroup.add(front.mesh);
    frontMatRef.current = front.mat;

    // 2. Right Side Profile (normal: +X, rotY = Math.PI / 2) -> faces camera at rotY = -PI/2 (270°)
    const right = createProfileMesh(rightTex, { x: depthOffset, y: 0, z: 0 }, Math.PI / 2);
    masterGroup.add(right.mesh);

    // 3. Back View (normal: -Z, rotY = Math.PI) -> faces camera at rotY = PI (180°)
    const back = createProfileMesh(backTex, { x: 0, y: 0, z: -depthOffset }, Math.PI);
    masterGroup.add(back.mesh);

    // 4. Left Side Profile (normal: -X, rotY = -Math.PI / 2) -> faces camera at rotY = PI/2 (90°)
    const left = createProfileMesh(leftTex, { x: -depthOffset, y: 0, z: 0 }, -Math.PI / 2);
    masterGroup.add(left.mesh);

    // 7. Holographic 3D Base Platform (Futuristic pedestal beneath feet)
    const pedestalGroup = new THREE.Group();
    pedestalGroup.position.y = -modelH / 2 - 0.05;
    masterGroup.add(pedestalGroup);

    const baseRing1Geom = new THREE.RingGeometry(0.85, 0.90, 64);
    const baseRing1Mat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide, transparent: true, opacity: 0.75 });
    const baseRing1 = new THREE.Mesh(baseRing1Geom, baseRing1Mat);
    baseRing1.rotation.x = Math.PI / 2;
    pedestalGroup.add(baseRing1);

    const baseRing2Geom = new THREE.RingGeometry(1.05, 1.08, 48);
    const baseRing2Mat = new THREE.MeshBasicMaterial({ color: 0x818cf8, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
    const baseRing2 = new THREE.Mesh(baseRing2Geom, baseRing2Mat);
    baseRing2.rotation.x = Math.PI / 2;
    pedestalGroup.add(baseRing2);

    // 8. 4D Dimensional Gyroscopic Orbit Rings
    const ringsGroup = new THREE.Group();
    masterGroup.add(ringsGroup);

    // Equatorial Cyan Ring
    const ring1Geom = new THREE.TorusGeometry(1.65, 0.015, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.75 });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    ringsGroup.add(ring1);

    // Polar Indigo Ring
    const ring2Geom = new THREE.TorusGeometry(1.80, 0.015, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x818cf8, transparent: true, opacity: 0.6 });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.x = Math.PI / 3;
    ringsGroup.add(ring2);

    // Oblique Emerald Ring
    const ring3Geom = new THREE.TorusGeometry(1.92, 0.012, 16, 100);
    const ring3Mat = new THREE.MeshBasicMaterial({ color: 0x34d399, transparent: true, opacity: 0.5 });
    const ring3 = new THREE.Mesh(ring3Geom, ring3Mat);
    ring3.rotation.y = Math.PI / 4;
    ringsGroup.add(ring3);

    // 9. Ambient 4D Floating Dust Particles
    const particleCount = 120;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 5.2;
      particlePositions[i + 1] = (Math.random() - 0.5) * 5.2;
      particlePositions[i + 2] = (Math.random() - 0.5) * 4.2;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.035,
      transparent: true,
      opacity: 0.75
    });
    const particleCloud = new THREE.Points(particleGeom, particleMat);
    scene.add(particleCloud);

    // 10. Interactive Mouse & Touch Drag Controls
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };

    const handleMouseDown = (e) => {
      isDragging = true;
      targetRotationYRef.current = null;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      const rect = canvasRef.current.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      pointLight.position.x = nx * 3.5;
      pointLight.position.y = ny * 3.5;

      if (isDragging) {
        const deltaX = e.clientX - prevMousePos.x;
        const deltaY = e.clientY - prevMousePos.y;

        masterGroup.rotation.y += deltaX * 0.015;
        masterGroup.rotation.x = Math.max(-0.30, Math.min(0.30, masterGroup.rotation.x + deltaY * 0.012));

        prevMousePos = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const canvasEl = canvasRef.current;
    canvasEl.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Touch Support
    let prevTouchPos = { x: 0, y: 0 };
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        targetRotationYRef.current = null;
        prevTouchPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - prevTouchPos.x;
        const deltaY = e.touches[0].clientY - prevTouchPos.y;

        masterGroup.rotation.y += deltaX * 0.015;
        masterGroup.rotation.x = Math.max(-0.30, Math.min(0.30, masterGroup.rotation.x + deltaY * 0.012));

        prevTouchPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    canvasEl.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // 11. Render & 4D Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId;
    let lastHUDUpdate = 0;

    const calcOpacity = (dot) => {
      if (dot <= 0.02) return 0.0;
      return Math.min(1.0, (dot - 0.02) / 0.45);
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth Glide Interpolation to Target View
      if (targetRotationYRef.current !== null) {
        masterGroup.rotation.y = THREE.MathUtils.lerp(masterGroup.rotation.y, targetRotationYRef.current, 0.09);
        masterGroup.rotation.x = THREE.MathUtils.lerp(masterGroup.rotation.x, 0, 0.09);

        if (Math.abs(masterGroup.rotation.y - targetRotationYRef.current) < 0.005) {
          masterGroup.rotation.y = targetRotationYRef.current;
          targetRotationYRef.current = null;
        }
      } else if (isRotatingRef.current && !isDragging) {
        masterGroup.rotation.y += 0.012;
        masterGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.06;
      }

      // 12. Angle-Aware Visibility & Opacity Blending
      const rotY = masterGroup.rotation.y;
      const frontDot = Math.cos(rotY);
      const backDot = -Math.cos(rotY);
      const leftDot = Math.sin(rotY);
      const rightDot = -Math.sin(rotY);

      front.mat.opacity = calcOpacity(frontDot);
      front.mesh.visible = front.mat.opacity > 0.02;

      right.mat.opacity = calcOpacity(rightDot);
      right.mesh.visible = right.mat.opacity > 0.02;

      back.mat.opacity = calcOpacity(backDot);
      back.mesh.visible = back.mat.opacity > 0.02;

      left.mat.opacity = calcOpacity(leftDot);
      left.mesh.visible = left.mat.opacity > 0.02;

      // Real-time HUD Update
      if (elapsedTime - lastHUDUpdate > 0.08) {
        lastHUDUpdate = elapsedTime;
        const normalizedDeg = Math.round((((rotY * 180 / Math.PI) % 360) + 360) % 360);
        setActiveAngleDeg(normalizedDeg);

        if (frontDot > 0.65) {
          setActiveProfile('Front Profile');
        } else if (rightDot > 0.65) {
          setActiveProfile('Right Side Profile');
        } else if (backDot > 0.65) {
          setActiveProfile('Back Profile');
        } else if (leftDot > 0.65) {
          setActiveProfile('Left Side Profile');
        } else {
          setActiveProfile('360° Turnaround');
        }
      }

      // Rotate gyroscopic rings
      ring1.rotation.z = elapsedTime * 0.4;
      ring2.rotation.y = elapsedTime * 0.5;
      ring3.rotation.x = elapsedTime * 0.35;

      // Rotate base platform rings
      baseRing1.rotation.z = -elapsedTime * 0.3;
      baseRing2.rotation.z = elapsedTime * 0.2;

      // Particle floating drift
      particleCloud.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // 13. Window Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth || 400;
      camera.aspect = newWidth / height;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvasEl.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      canvasEl.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      renderer.dispose();
    };
  }, []);

  // Smooth glide to a specific profile view
  const glideTo = (targetAngle) => {
    if (!modelGroupRef.current) return;
    setIsRotating(false);

    const current = modelGroupRef.current.rotation.y;
    const diff = (targetAngle - (current % (2 * Math.PI)) + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
    targetRotationYRef.current = current + diff;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full select-none">
      
      {/* Three.js WebGL 3D/4D Canvas (100% Frameless, Clear & Unobstructed) */}
      <div 
        ref={containerRef} 
        className="relative w-full max-w-[420px] h-[460px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        title="Interactive 360° Model - Drag in any direction to rotate freely!"
      >
        {/* Soft Ambient Depth Glow behind the 3D model */}
        <div className="absolute inset-0 max-w-[360px] max-h-[360px] m-auto bg-gradient-to-tr from-primary-500/25 via-indigo-500/20 to-cyan-400/25 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* WebGL Canvas */}
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Real-time Dynamic Profile HUD Badge */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 glass-panel px-4 py-1.5 rounded-full text-xs font-mono text-cyan-300 border border-cyan-500/30 shadow-lg backdrop-blur-md flex items-center gap-2 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-semibold text-white">{activeProfile}</span>
          <span className="text-slate-400">({activeAngleDeg}°)</span>
        </div>

        {/* Floating Orbit Chip 1: Java & Spring */}
        <div className="absolute top-16 -left-2 glass-panel px-3.5 py-1 rounded-full text-xs font-mono text-primary-300 font-semibold shadow-xl backdrop-blur-md pointer-events-none">
          ☕ Java & Spring Boot
        </div>

        {/* Floating Orbit Chip 2: PostgreSQL & DBA */}
        <div className="absolute bottom-12 -right-2 glass-panel px-3.5 py-1 rounded-full text-xs font-mono text-cyan-300 font-semibold shadow-xl backdrop-blur-md pointer-events-none">
          🗄️ PostgreSQL & DBA
        </div>
      </div>

      {/* 3D Profile Quick Controls Bar */}
      <div className="mt-2 flex flex-wrap items-center justify-center gap-2 max-w-md">
        
        {/* Auto Spin Toggle */}
        <button
          onClick={() => {
            targetRotationYRef.current = null;
            setIsRotating(!isRotating);
          }}
          className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-all flex items-center gap-1.5 shadow-md ${
            isRotating 
              ? 'bg-primary-950/80 text-primary-300 border-primary-500/50 shadow-primary-500/20' 
              : 'bg-slate-900/90 text-slate-300 border-slate-700/60 hover:text-white'
          }`}
          title="Toggle continuous 360° rotation"
        >
          {isRotating ? (
            <>
              <Pause className="w-3.5 h-3.5 text-amber-400" />
              <span>Pause Spin</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-emerald-400" />
              <span>Auto 360° Spin</span>
            </>
          )}
        </button>

        {/* Front Profile Button */}
        <button
          onClick={() => glideTo(0)}
          className="px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-xs font-mono text-slate-200 hover:text-primary-300 border border-slate-700/60 transition-all flex items-center gap-1 shadow-md hover:border-primary-500/40"
        >
          <User className="w-3.5 h-3.5 text-primary-400" />
          <span>Front (0°)</span>
        </button>

        {/* Right Side Profile Button */}
        <button
          onClick={() => glideTo(-Math.PI / 2)}
          className="px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-xs font-mono text-slate-200 hover:text-cyan-300 border border-slate-700/60 transition-all flex items-center gap-1 shadow-md hover:border-cyan-500/40"
        >
          <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
          <span>Right Side (90°)</span>
        </button>

        {/* Back View Button */}
        <button
          onClick={() => glideTo(Math.PI)}
          className="px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-xs font-mono text-slate-200 hover:text-indigo-300 border border-slate-700/60 transition-all flex items-center gap-1 shadow-md hover:border-indigo-500/40"
        >
          <Rotate3d className="w-3.5 h-3.5 text-indigo-400" />
          <span>Back (180°)</span>
        </button>

        {/* Left Side Profile Button */}
        <button
          onClick={() => glideTo(Math.PI / 2)}
          className="px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-xs font-mono text-slate-200 hover:text-emerald-300 border border-slate-700/60 transition-all flex items-center gap-1 shadow-md hover:border-emerald-500/40"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-emerald-400" />
          <span>Left Side (270°)</span>
        </button>

        {/* Switch Photo Mode: 3D Avatar vs Real Photo */}
        <button
          onClick={() => setUseRealPhoto(!useRealPhoto)}
          className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-all flex items-center gap-1.5 shadow-md ${
            useRealPhoto
              ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50 shadow-emerald-500/20'
              : 'bg-slate-900/90 text-slate-300 border-slate-700/60 hover:text-white'
          }`}
          title="Switch between 3D Avatar and Original Real Photo"
        >
          <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
          <span>{useRealPhoto ? 'Mode: Real Photo' : 'Mode: 3D Avatar'}</span>
        </button>
      </div>

      <p className="text-[11px] font-mono text-slate-500 mt-2 text-center">
        💡 Click "Right Side (90°)" or "Left Side (270°)" or drag to view your side profiles in full 3D!
      </p>

    </div>
  );
}
