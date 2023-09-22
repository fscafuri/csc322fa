const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 150);
camera.lookAt(0, 55, 0);

const scene = new THREE.Scene();


const geometry1 = new THREE.BufferGeometry();


//first side
const side1 = new Float32Array( [
   5.5, 0, 5.5,
   5.5, 0, -5.5,
   3.4, 100, 3.4,

   5.5, 0, -5.5,
   3.4, 100, -3.4,
   3.4, 100, 3.4,

] );

//create geometry of side, adds color of rgb red and adds
geometry1.setAttribute( 'position', new THREE.BufferAttribute( side1, 3 ) );
const materialside1 = new THREE.MeshBasicMaterial( { color: "rgb(255, 0, 0)" } );
const mesh1 = new THREE.Mesh( geometry1, materialside1 );

scene.add(mesh1)

//side 2 vertices
const side2 = new Float32Array( [
  -5.5, 0, 5.5,
	 5.5, 0, 5.5,
   3.4, 100, 3.4,

	 -3.4, 100, 3.4,
	 -5.5, 0, 5.5,
   3.4, 100, 3.4,

] );

//creates side, assigns random rgb color
const geometry2 = new THREE.BufferGeometry();
geometry2.setAttribute( 'position', new THREE.BufferAttribute( side2, 3 ) );
const materialside2 = new THREE.MeshBasicMaterial( { color: "rgb(64, 200, 150)" } );
const mesh2 = new THREE.Mesh( geometry2, materialside2 );

scene.add(mesh2);


//side 3
const side3 = new Float32Array( [
   5.5, 0, -5.5,
	 -5.5, 0, -5.5,
   -3.4, 100, -3.4,

	3.4, 100, -3.4,
	 5.5, 0, -5.5,
   -3.4, 100, -3.4,

] );

//creates side and makes it green
const geometry3 = new THREE.BufferGeometry();
geometry3.setAttribute( 'position', new THREE.BufferAttribute( side3, 3 ) );
const materialside3 = new THREE.MeshBasicMaterial( { color: 0x00FF00 } );
const mesh3 = new THREE.Mesh( geometry3, materialside3 );

scene.add(mesh3);

//side 4
const side4 = new Float32Array( [
	 -5.5, 0, -5.5,
   -5.5, 0, 5.5,
   -3.4, 100, 3.4,

	 -5.5, 0, -5.5,
   -3.4, 100, 3.4,
   -3.4, 100, -3.4,

] );

//creates side and assigns it CSS String purple
const geometry4 = new THREE.BufferGeometry();
geometry4.setAttribute( 'position', new THREE.BufferAttribute( side4, 3 ) );
const materialside4 = new THREE.MeshBasicMaterial( { color: "purple" } );
const mesh4 = new THREE.Mesh( geometry4, materialside4);

scene.add(mesh4);

//first side of top
const top1 = new Float32Array( [
	 3.4, 100, -3.4,
   0, 111, 0,
   3.4, 100, 3.4,

] );

// makes top and assigns it purple
const geometrytop1 = new THREE.BufferGeometry();
geometrytop1.setAttribute( 'position', new THREE.BufferAttribute( top1, 3 ) );
const materialtop1 = new THREE.MeshBasicMaterial( { color: 0x0000FF } );
const meshtop1 = new THREE.Mesh(geometrytop1, materialtop1);

scene.add(meshtop1);

//second top side
const top2 = new Float32Array( [
	 3.4, 100, 3.4,
   0, 111, 0,
   -3.4, 100, 3.4,


] );

//creates top side and makes it orange
const geometrytop2 = new THREE.BufferGeometry();
geometrytop2.setAttribute( 'position', new THREE.BufferAttribute( top2, 3 ) );
const materialtop2 = new THREE.MeshBasicMaterial( { color: 0xFFA500 } );
const meshtop2 = new THREE.Mesh(geometrytop2, materialtop2);

scene.add(meshtop2);


//third top side
const top3 = new Float32Array( [
	 -3.4, 100, 3.4,
   0, 111, 0,
  -3.4, 100, -3.4,


] );

//makes side and makes it white
const geometrytop3 = new THREE.BufferGeometry();
geometrytop3.setAttribute( 'position', new THREE.BufferAttribute( top3, 3 ) );
const materialtop3 = new THREE.MeshBasicMaterial( { color: "white" } );
const meshtop3 = new THREE.Mesh(geometrytop3, materialtop3);

scene.add(meshtop3);


//4th top side
const top4 = new Float32Array( [
	 -3.4, 100, -3.4,
   0, 111, 0,
  3.4, 100, -3.4,


] );

//creates last top side and makes it pink
const geometrytop4 = new THREE.BufferGeometry();
geometrytop4.setAttribute( 'position', new THREE.BufferAttribute( top4, 3 ) );
const materialtop4 = new THREE.MeshBasicMaterial( { color: 0xFF00FF } );
const meshtop4 = new THREE.Mesh(geometrytop4, materialtop4);

scene.add(meshtop4);



renderer.render(scene, camera);

function animate() {
  requestAnimationFrame(animate);


  mesh1.rotation.y += 0.01;
  mesh2.rotation.y += 0.01;
  mesh3.rotation.y += 0.01;
  mesh4.rotation.y += 0.01;
  meshtop1.rotation.y += 0.01;
  meshtop2.rotation.y += 0.01;
  meshtop3.rotation.y += 0.01;
  meshtop4.rotation.y += 0.01;

  renderer.render(scene, camera);
}

// add Orbit controls to let users click and drag the selected object
/* var controls = new OrbitControls (camera, renderer.domElement); */

animate();
