import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public scene: THREE.Scene;
  public camera: THREE.Camera;
  public renderer: THREE.Renderer;
  public cube: THREE.Mesh;
  title = 'AmazingThings';

  constructor() {
    this.render = this.render.bind(this);
  }

  ngOnInit() {
    this.setUpScene();
    this.render();
  }

  render() {
    if (this.renderer) {
      requestAnimationFrame( this.render );
      this.cube.position.x += 0.01;
      this.cube.rotation.y += 0.01;
      this.renderer.render(this.scene, this.camera);
    }
  }


  setUpScene() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( this.renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    this.cube = new THREE.Mesh( geometry, material );
    this.scene.add( this.cube );

    this.camera.position.z = 5;
  }
}
