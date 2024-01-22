import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({ required: true}) duration: number = 0;
  @Input({required: true}) message: string = '';

  constructor(){
    //No ASYNC
    //before render
    //solo corre una vez
    console.log("constructor");
    console.log("-".repeat(10));
  }

  ngOnChanges(changes: SimpleChange){
    //before render and during render
    console.log("ngOnChanges");
    console.log(changes);
    console.log("-".repeat(10));
  }

  ngOnInit(){
    //sirve como inicializador del componente
    //after render
    //solo corre una vez
    //async, then, subscribe, fetch, etc.
    console.log("ngOnInit");
    console.log("-".repeat(10));
    console.log("duration =>", this.duration);
    console.log("message =>", this.message);

  }

  ngAfterViewInit(){
    //after render
    //hijos ya fueron renderizados
    console.log("ngAfterViewInit");
    console.log("-".repeat(10));
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
  }
}
