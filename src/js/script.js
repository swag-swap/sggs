import * as THREE from 'three';

// import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';

import { MapControls } from 'three/examples/jsm/controls/OrbitControls.js';


import {GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';   

import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

let camera, controls, scene, renderer;

var animation = true; // For text 

const sggsUrl = new URL('../assets/sggs5.glb',import.meta.url);
const load = document.getElementById('loader');



init(); 
animate();


function init() {
    // Adding scene and background color
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xcccccc );
    scene.fog = new THREE.FogExp2( 0xcccccc, 0.001 );

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
      "https://www.gstatic.com/draco/versioned/decoders/1.4.1/"
    );
    
    const assetLoader = new GLTFLoader();
    assetLoader.setDRACOLoader(dracoLoader);
  

    assetLoader.load(sggsUrl.href , function(gltf){
        const model = gltf.scene;
        scene.add(model);
        model.scale.set(100, 100, 100);
        
        model.position.set(-400,0,-640);
    } , // called while loading is progressing
	function ( xhr ) {

		// console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        var loadnum = xhr.loaded / xhr.total ;
        load.innerHTML = ( loadnum * 100 ) + '%';
        if(loadnum >=1){
            load.style.display = "none"; 
            document.getElementById('load').style.display = "none";
        }

	}, function(error){
        console.log(error);
    })



    //Setting renderer
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );


    // Get the camera
    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 4000 );
    camera.position.set( -88 , 195 , 450 );

    // controls

    controls = new MapControls( camera, renderer.domElement );


    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05;

    controls.screenSpacePanning = false; // For going camera outside a plane

    controls.minDistance = 100;
    controls.maxDistance = 500;

    controls.maxPolarAngle = Math.PI / 2;
 

    // const axesHelper = new THREE.AxesHelper(100)
    // scene.add(axesHelper);

    const boxGeometry = new THREE.BoxGeometry();
    const boxMaterial = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0})
    // const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00})

    //Admin Text 
    const admin = new THREE.Mesh(boxGeometry , boxMaterial)
    scene.add(admin)
    admin.scale.set(100 ,50 ,50)
    admin.position.set(30,180,-400)
    admin.userData.draggable = true;
    admin.userData.name = '_admin';


    //entc
    const entc = new THREE.Mesh(boxGeometry , boxMaterial)
    scene.add(entc)
    entc.scale.set(100 ,50 ,50)
    entc.position.set(-500,140,-200)
    entc.userData.draggable = true;
    entc.userData.name = '_entc';
    
    // rnxg
    const rnxg = new THREE.Mesh(boxGeometry , boxMaterial)
    scene.add(rnxg)
    rnxg.scale.set(100 ,50 ,50)
    rnxg.position.set(-350,40,-800)
    rnxg.userData.draggable = true;
    rnxg.userData.name = '_rnxg';

    // instru
    const instru = new THREE.Mesh(boxGeometry , boxMaterial)
    scene.add(instru)
    instru.scale.set(100 ,40 ,50)
    instru.position.set(-565,140,-600)
    instru.userData.draggable = true;
    instru.userData.name = '_instru';

    // Textile 
    const textile = new THREE.Mesh(boxGeometry , boxMaterial)
    scene.add(textile)
    textile.scale.set(100 ,40 ,50)
    textile.position.set(-700,110,-800)
    textile.userData.draggable = true;
    textile.userData.name = '_textile';

    // cse
    const cse = new THREE.Mesh(boxGeometry , boxMaterial)
    scene.add(cse)
    cse.scale.set(110 ,50 ,50)
    cse.position.set(-920,110,-900)
    cse.userData.draggable = true;
    cse.userData.name = '_cse';

    // Production
    const production = new THREE.Mesh(boxGeometry , boxMaterial)
    scene.add(production)
    production.scale.set(150 ,40 ,50)
    production.position.set(-700,110,-1100)
    production.userData.draggable = true;
    production.userData.name = '_production';


    // boys hostel
    const boysh = new THREE.Mesh(boxGeometry , boxMaterial)
    scene.add(boysh)
    boysh.scale.set(110 ,80 ,50)
    boysh.position.set(-1400,170,-650)
    boysh.userData.draggable = true;
    boysh.userData.name = '_boysh';



    //sports
    const sport = new THREE.Mesh(boxGeometry , boxMaterial)
    scene.add(sport)
    sport.scale.set(130 ,50 ,50)
    sport.position.set(-1070,90,-200)
    sport.userData.draggable = true;
    sport.userData.name = '_sport';

    // Boys canteen
    const boysc = new THREE.Mesh(boxGeometry , boxMaterial)
    scene.add(boysc)
    boysc.scale.set(120 ,80 ,50)
    boysc.position.set(-1670,120,-400)
    boysc.userData.draggable = true;
    boysc.userData.name = '_boysc';


    // Girls Hostel
    const girlh = new THREE.Mesh(boxGeometry , boxMaterial)
    scene.add(girlh)
    girlh.scale.set(130 ,50 ,50)
    girlh.position.set(550,80,-230)
    girlh.rotation.y = -Math.PI/4
    girlh.userData.draggable = true;
    girlh.userData.name = '_girlh';


    // lights

    const dirLight1 = new THREE.DirectionalLight( 0xffffff );
    dirLight1.position.set( 1, 1, 1 );
    scene.add( dirLight1 );

    const dirLight2 = new THREE.DirectionalLight( 0x002288 );
    dirLight2.position.set( - 1, - 1, - 1 );
    scene.add( dirLight2 );

    const ambientLight = new THREE.AmbientLight( 0x222222 );
    scene.add( ambientLight );

    //

    window.addEventListener( 'resize', onWindowResize );


}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
    // console.log(camera.position)
}



function animate() {
    if(animation){

        requestAnimationFrame( animate );

        controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true


        render();

    }   


    

}

function render() {

    renderer.render( scene, camera );

}



// Getting mouse pointer location and adding event listener
const raycaster = new THREE.Raycaster();
const clickMouse = new THREE.Vector2();
// const moveMouse = new THREE.Vector2();
var draggable = THREE.Object3D;
button = document.getElementById("button");
main = document.getElementById("main")



document.addEventListener('click', event=>{
    if(animation){

        raycaster.setFromCamera( clickMouse, camera );
        clickMouse.x = ( event.clientX / document.innerWidth ) * 2 - 1;
        clickMouse.y = - ( event.clientY / document.innerHeight ) * 2 + 1;


        const found = raycaster.intersectObjects( scene.children );

        if(found.length > 0 && found[0].object.userData.draggable){
            draggable = found[0].object
            // console.log(`found ${draggable.userData.name}`)
            main.style.display = "block";
            document.getElementById(draggable.userData.name).style.display = "block";
            animation = false;
        }
    }


})


// Adding event listener to button if button click then display of main div is none
button.addEventListener('click',()=>{
    animation=true;
    document.getElementById(draggable.userData.name).style.display = "none";
    main.style.display = "none";
    animate();
})

