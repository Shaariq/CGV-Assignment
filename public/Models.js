/**
 * declared some Global variables
 */
var mixer, obj;
var gunSound;
var walkingSound;
var camera;
var scene;
var skybox = null; // I set the skybox to null and also made it global so I could change to diiferent skyboxes

/**
 * these are the different array's that hold the urls for the textures for the different skyboxes
 */

var AridArray = [
  "https://i.ibb.co/4RMh4yW/arid2-ft.jpg",
  "https://i.ibb.co/BzprVmY/arid2-bk.jpg",
  "https://i.ibb.co/QdTh2N5/arid2-up.jpg",
  "https://i.ibb.co/3vXGDFy/arid2-dn.jpg",
  "https://i.ibb.co/QPkp1gZ/arid2-rt.jpg",
  "https://i.ibb.co/HVvN38y/arid2-lf.jpg",
];


var HellArray = [
  "https://i.ibb.co/yX98hch/flame-ft.jpg",
  "https://i.ibb.co/Z6rR9jx/flame-bk.jpg",
  "https://i.ibb.co/nQ43ck2/flame-up.jpg",
  "https://i.ibb.co/w6nkJBL/flame-dn.jpg",
  "https://i.ibb.co/frFz93V/flame-rt.jpg",
  "https://i.ibb.co/hg74qN4/flame-lf.jpg",
];


class Load_SkyBoxes_walls{
    SkyBox(){
        /*/------------------------------------------------------------------------------------------/*/
        /**
         * A function to make the skyboxes
         * @param {*} ft 
         * @param {*} bk 
         * @param {*} up 
         * @param {*} dn 
         * @param {*} rt 
         * @param {*} lf 
         */
        /*/------------------------------------------------------------------------------------------/*/
        const MakeSkyBox = (ft, bk, up, dn, rt, lf) => {
            // this function is used to create the skyboxe, I pass the urls as parameters
            /**
             * declare a materialArray
             * use TextureLoader to load textures in the downward, upward, leftward, rightward , backward and forward direction
             * and push in the material array
             * add them to the scene
             */
            let materialArray = [];
            let texture_ft = new THREE.TextureLoader().load(ft);
            let texture_bk = new THREE.TextureLoader().load(bk);
            let texture_up = new THREE.TextureLoader().load(up);
            let texture_dn = new THREE.TextureLoader().load(dn);
            let texture_rt = new THREE.TextureLoader().load(rt);
            let texture_lf = new THREE.TextureLoader().load(lf);
          
            materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
            materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
            materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
            materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
            materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
            materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));
          
            for (let i = 0; i < 6; i++) materialArray[i].side = THREE.BackSide;
          
            let skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000);
            skybox = new THREE.Mesh(skyboxGeo, materialArray);
            scene.add(skybox);
          }
          /*/------------------------------------------------------------------------------------------/*/
          /**
           * To avoid being welocomed by a blank screen
           * And be welcomed by the Arid texture
           */
          /*/------------------------------------------------------------------------------------------/*/
          MakeSkyBox( AridArray[0], AridArray[1], AridArray[2], AridArray[3], AridArray[4], AridArray[5]); 
          // I called this so that the user is not welcomed with a black screen but rather the arid texture
          
          window.onload = function () {
            const countdownEle = document.getElementById("countdown");
            function updateCountdown(){
              const min = Math.floor(time2/60);
              let seconds = time2%60;
              countdownEle.innerHTML = `${min}:${seconds}`;
              if(time2 > 0){
                time2--;
              }
            }
            setInterval(updateCountdown, 1000);
            /*/------------------------------------------------------------------------------------------/*/
              /**
               * A function to draw the rader
               */
              /*/------------------------------------------------------------------------------------------/*/
            function drawRadar() {
              var c = getMapSector(camera.position), context = document.getElementById('radar').getContext('2d');
              context.font = '10px Helvetica';
              for (var i = 0; i < mapW; i++) {
                for (var j = 0, m = map[i].length; j < m; j++) {
                  var d = 0;
                  for (var k = 0, n = ai.length; k < n; k++) {
                    var e = getMapSector(ai[k].position);
                    if (i == e.x && j == e.z) {
                      d++;
                    }
                  }
                  if (i == c.x && j == c.z && d == 0) {
                    context.fillStyle = '#0000FF';
                    context.fillRect(i * 20, j * 20, (i+1)*20, (j+1)*20);
                  }
                  else if (i == c.x && j == c.z) {
                    context.fillStyle = '#AA33FF';
                    context.fillRect(i * 20, j * 20, (i+1)*20, (j+1)*20);
                    context.fillStyle = '#000000';
                    context.fillText(''+d, i*20+8, j*20+12);
                  }
                  else if (d > 0 && d < 10) {
                    context.fillStyle = '#FF0000';
                    context.fillRect(i * 20, j * 20, (i+1)*20, (j+1)*20);
                    context.fillStyle = '#000000';
                    context.fillText(''+d, i*20+8, j*20+12);
                  }
                  else if (map[i][j] > 0) {
                    context.fillStyle = '#666666';
                    context.fillRect(i * 20, j * 20, (i+1)*20, (j+1)*20);
                  }
                  else {
                    context.fillStyle = '#CCCCCC';
                    context.fillRect(i * 20, j * 20, (i+1)*20, (j+1)*20);
                  }
                }
              }
            }
            /**
             * call the function to draw the rader and set its interval
             */
            drawRadar();
            setInterval(drawRadar, 1000);
            /*/------------------------------------------------------------------------------------------/*/
            /**
             * get the button id's for arid , cocoa, meadow, hell  from the html file
             */
            /*/------------------------------------------------------------------------------------------/*/
            var arid = document.getElementById("arid"); // this is used to get the id's for the different buttons from the html
            var hell = document.getElementById("hell");
           
           /*/------------------------------------------------------------------------------------------/*/
            /**
             * function to be called when the user click on the arid button on the game
             */
            /*/------------------------------------------------------------------------------------------/*/
            arid.onclick = function AridSkyBox() {
              MakeSkyBox(AridArray[0], AridArray[1], AridArray[2], AridArray[3], AridArray[4], AridArray[5]);
                /**
                 * uses TextureLoader to load textures for the arid skybox
                 * @param v6
                 * pass the files containing textures 
                 */
                const textureLoader = new THREE.TextureLoader();
                const groundTexture = textureLoader.load( "./Assets/PlaneTexture/Dirt/Grass_005_BaseColor.jpg");
                const tilesNormalMap = textureLoader.load( "./Assets/PlaneTexture/Dirt/Grass_005_Normal.jpg");
                const tilesHeightMap = textureLoader.load( "./Assets/PlaneTexture/Dirt/Grass_005_Height.jpg" );
                const tilesRoughnessMap = textureLoader.load( "./Assets/PlaneTexture/Dirt/Grass_005_Roughness.jpg" );
                const tilesAmbientOcclusionMap = textureLoader.load(  "./Assets/PlaneTexture/Dirt/Grass_005_AmbientOcclusion.jpg" );
            
                /**
                 * apply wrapS , wrapT , repeat , anisotrophy and some RGB encoding to the groundTexture
                 */
                groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
                groundTexture.repeat.set(100, 100);
                groundTexture.anisotropy = 16;
                groundTexture.encoding = THREE.sRGBEncoding;
                
                /**
                 * create the groundMaterial 
                 */
                const groundMaterial = new THREE.MeshPhongMaterial({
                    map: groundTexture,
                    normalMap: tilesNormalMap,
                    displacementMap: tilesHeightMap,
                    displacementScale: 0.05,
                    aoMap: tilesAmbientOcclusionMap,
                });
                
                /**
                 * create plane geometry for the plane
                 * add plane to the scene
                 */
                const planeGeometry = new THREE.PlaneGeometry(1000, 1000, 100, 100);
                plane = new THREE.Mesh(planeGeometry, groundMaterial);
                plane.rotateX(-Math.PI / 2);
                plane.geometry.attributes.uv2 = plane.geometry.attributes.uv;
                plane.receiveShadow = true;
                scene.add(plane);
            };
         
          /*/------------------------------------------------------------------------------------------/*/
            /**
             * function to be called when the user click on the hell button on the game
             */
            /*/------------------------------------------------------------------------------------------/*/
            hell.onclick = function HellSkyBox() {
                MakeSkyBox( HellArray[0], HellArray[1], HellArray[2], HellArray[3], HellArray[4], HellArray[5] );
                
                /**
                 * uses TextureLoader to load textures for the hell skybox
                 * @param v6
                 * pass the files containing textures 
                 */
                const textureLoader = new THREE.TextureLoader();
                const tilesBaseColor = textureLoader.load( "./Assets/PlaneTexture/Pebbles/Pebbles_029_BaseColor.jpg" );
                const tilesNormalMap = textureLoader.load( "./Assets/PlaneTexture/Pebbles/Pebbles_029_Normal.jpg" );
                const tilesHeightMap = textureLoader.load( "./Assets/PlaneTexture/Pebbles/Pebbles_029_Height.jpg" );
                const tilesRoughnessMap = textureLoader.load( "./Assets/PlaneTexture/Pebbles/Pebbles_029_Roughness.jpg" );
                const tilesAmbientOcclusionMap = textureLoader.load( "./Assets/PlaneTexture/Pebbles/Pebbles_029_AmbientOcclusion.jpg" );
                const groundTexture = textureLoader.load( "./Assets/PlaneTexture/Pebbles/Pebbles_029_BaseColor.jpg" );
                
                /**
                 * apply wrapS , wrapT , repeat , anisotrophy and some RGB encoding to the groundTexture
                 */
                groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
                groundTexture.repeat.set(100, 100);
                groundTexture.anisotropy = 16;
                groundTexture.encoding = THREE.sRGBEncoding;
                
                /**
                 * create the groundMaterial 
                 */
                const groundMaterial = new THREE.MeshPhongMaterial({
                    map: groundTexture,
                    normalMap: tilesNormalMap,
                    displacementMap: tilesHeightMap,
                    displacementScale: 0.05,
                    aoMap: tilesAmbientOcclusionMap,
                });
              
                /**
                 * create plane geometry for the plane
                 * add plane to the scene
                 */
                const planeGeometry = new THREE.PlaneGeometry(1000, 1000, 100, 100);
                plane = new THREE.Mesh(planeGeometry, groundMaterial);
                plane.rotateX(-Math.PI / 2);
                plane.geometry.attributes.uv2 = plane.geometry.attributes.uv;
                plane.receiveShadow = true;
                scene.add(plane);
            };
          };
    }

    
}

class Load_Gun_Character_Lighting{

    Load_models(){
        /*/------------------------------------------------------------------------------------------/*/
        /**
         * uses mtl loader file format to load the gun textures
         * @param v
         * pass the gun model texture file path to the mtl loader
         * pass the gun model path to the mtl loader
         * load the file with textures with mtl loader 
         */
        /*/------------------------------------------------------------------------------------------/*/
        var mtLoader = new THREE.MTLLoader();
        mtLoader.setTexturePath("./Assets/Models/");
        mtLoader.setPath("./Assets/Models/");
        mtLoader.load("AssaultRifle2_4.mtl", function (materials) {
            /**
             * uses OBJLoader to load the gun model and apply textures on it
             * @param v6
             * pass the directory where the gun model is situated
             * pass the file of the gun model
             */
            materials.preload();
            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath("./Assets/Models/");
            objLoader.load("AssaultRifle2_4.obj", function (object) {
                /**
                 * apply some basic transformation to the gun model namely : rotation , scaling
                 * and also apply castshadow to on the gun model
                 * add the gun model to the camera
                 */
                object.rotation.y = Math.PI / 1.75;
                object.scale.set(1, 1, 1);
                object.position.z = -0.75;
                object.position.y = -1;
                object.position.x = 1.5;
                obj = object;
                obj.castShadow = true;
                camera.add(obj);
            });
        });

        /**
         * create a manager using loadingManager 
         */
        var manager = new THREE.LoadingManager();
        // manager.onProgress = function (item, loaded, total) {
        // //console.log(item, loaded, total);
        // };
        // model
        var loader = new THREE.OBJLoader(manager);
        loader.load("./Assets/Models/AssaultRifle2_4.obj", function (object) {
            object.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                //child.material.map = texture;
                }
            });

            object.rotation.y = Math.PI / 1.75;
            object.scale.set(1, 1, 1);
            object.position.z = -0.75;
            object.position.y = -1;
            object.position.x = 1.5;
        });
        /*/------------------------------------------------------------------------------------------/*/
        /**
         * uses FBXloader to load character fbx model
         * @param v6
         * pass the directory where the character model is situated
         * pass the file of the character model
         */
        /*/------------------------------------------------------------------------------------------/*/
        const charLoader = new THREE.FBXLoader();
        charLoader.setPath("./Assets/Models/");
        charLoader.load("Character.fbx", (fbx) => {
            /**
             * apply  basic transformation on the character. Name: scale
             * also apply castshadow to the character
             */
            fbx.scale.setScalar(0.1);
            fbx.traverse((c) => {
                c.castShadow = true;
            });

            /**
             * uses FBXloader to load a walking character fbx model 
             * @param v6
             *  pass the directory where thewalking character model is situated
             * pass the file of the character model
             */    
            const anim = new THREE.FBXLoader();
            anim.setPath("./Assets/Models/");
            anim.load("Walking.fbx", (anim) => {
                /**
                 * uses animation mixer which schedules the performance for the animation
                 * uses clipaction which stores the animation data for that specific action
                 */
                mixer = new THREE.AnimationMixer(fbx);
                const idle = mixer.clipAction(anim.animations[0]);
                idle.play();
            });
            /**
             * set position and a single scale transformation
             * add the character to the camera
             */
            fbx.position.set(0, -3, 0.65);
            fbx.rotation.y = Math.PI;
            fbx.scale.set(0.03, 0.03, 0.03);
            camera.add(fbx);
        });           
    }
    /*/------------------------------------------------------------------------------------------/*/
    /**
     * A function create and load the plane
     */
    /*/------------------------------------------------------------------------------------------/*/
    Load_Plane(){
        let plane;
        /**
         * uses TextureLoader to load textures fo the plane
         * @param v6
         * pass the files containing textures 
         */
        const textureLoader = new THREE.TextureLoader();
        const groundTexture = textureLoader.load( "./Assets/PlaneTexture/Dirt/Grass_005_BaseColor.jpg");
        const tilesNormalMap = textureLoader.load( "./Assets/PlaneTexture/Dirt/Grass_005_Normal.jpg");
        const tilesHeightMap = textureLoader.load( "./Assets/PlaneTexture/Dirt/Grass_005_Height.jpg" );
        const tilesRoughnessMap = textureLoader.load( "./Assets/PlaneTexture/Dirt/Grass_005_Roughness.jpg");
        const tilesAmbientOcclusionMap = textureLoader.load( "./Assets/PlaneTexture/Dirt/Grass_005_AmbientOcclusion.jpg" );
 
        /**
         * apply wrapS , wrapT , repeat , anisotrophy and some RGB encoding to the groundTexture
         */
        groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
        groundTexture.repeat.set(100, 100);
        groundTexture.anisotropy = 16;
        groundTexture.encoding = THREE.sRGBEncoding;

        /**
         * create the groundMaterial 
         */
        const groundMaterial = new THREE.MeshPhongMaterial({
        map: groundTexture,
        normalMap: tilesNormalMap,
        displacementMap: tilesHeightMap,
        displacementScale: 0.05,
        aoMap: tilesAmbientOcclusionMap,
        });

        /**
         * create plane geometry for the plane
         * add plane to the scene
         */
        const planeGeometry = new THREE.PlaneGeometry(1000, 1000, 100, 100);
        plane = new THREE.Mesh(planeGeometry, groundMaterial);
        plane.rotateX(-Math.PI / 2);
        plane.geometry.attributes.uv2 = plane.geometry.attributes.uv;
        plane.receiveShadow = true;
        scene.add(plane);
    }
    /*/------------------------------------------------------------------------------------------/*/
   /**
    * A function to load the sound
    */
   /*/------------------------------------------------------------------------------------------/*/
    Load_Sound(){
        /**
         * uses Audiolistener to create a listener 
         * add a listener to the camera
         * use Audio to create some sound for the listener
         * use AudioLoader to the the sound
         * @param v6
         * pass the file containing some ambience sound*/
        const listener = new THREE.AudioListener();
        camera.add(listener);

        const sound = new THREE.Audio(listener);

        const audioLoader = new THREE.AudioLoader();
        audioLoader.load("./Assets/Audio/ambience.wav", function (buffer) {
            sound.setBuffer(buffer);
            sound.setLoop(true);
            sound.setVolume(0.5);
            sound.play();
        });

        /**
         * uses Audio to create some walking sound for the listener
         * @param v6
         * pass the file containing the walking sound for the listener 
         */
        walkingSound = new THREE.Audio(listener);
        audioLoader.load("./Assets/Audio/walking.wav", function (buffer) {
            walkingSound.setBuffer(buffer);
            walkingSound.setLoop(true);
            walkingSound.setVolume(0.9);
        });
        /**
         * uses Audio to create some gun sound for the listener
         * @param v6
         * pass the file containing the gun fire sound 
         */
        gunSound = new THREE.Audio(listener);
        audioLoader.load("./Assets/Audio/gunshot.mp3", function (buffer) {
            gunSound.setBuffer(buffer);
            gunSound.setLoop(true);
            gunSound.setVolume(0.5);
        });

    }
    /*/------------------------------------------------------------------------------------------/*/
    /**
     * function to load the light
     */
    /*/------------------------------------------------------------------------------------------/*/
    Load_Light(){
        /**
         * use ambient light
         * adds ambient light to the scene
         */
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        /**
         * use directional light 
         * adds directional light to the scene
         */
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
        directionalLight.castShadow = true;
        scene.add(directionalLight);
        
        /**
         * create a reticle
         */
        let reticle = new THREE.Mesh(
            new THREE.RingBufferGeometry(0.85 * 0.05, 0.05, 32),
            new THREE.MeshBasicMaterial({
              color: 0xffffff,
              blending: THREE.AdditiveBlending,
              side: THREE.DoubleSide,
            })
          );
          reticle.position.z = -3 * 0.5;
          camera.add(reticle);
         
    }
}
/*/------------------------------------------------------------------------------------------/*/
let LoadGun = new Load_Gun_Character_Lighting();
LoadGun.Load_models();
LoadGun.Load_Plane();
LoadGun.Load_Sound();
LoadGun.Load_Light();
let Load = new Load_SkyBoxes_walls();
Load.SkyBox();
/*/------------------------------------------------------------------------------------------/*/