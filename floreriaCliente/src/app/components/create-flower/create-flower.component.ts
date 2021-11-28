import { Flores } from './../../models/flores';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FloresService } from 'src/app/services/flores.service';

@Component({
  selector: 'app-create-flower',
  templateUrl: './create-flower.component.html',
  styleUrls: ['./create-flower.component.css']
})
export class CreateFlowerComponent implements OnInit {

  formsFlowers: FormGroup;

  title = "Add Flower";
  id: string | null;

  constructor(private formBuilder: FormBuilder, private router: Router, private serviceFlower: FloresService,
    private aRouter: ActivatedRoute) { 
    this.formsFlowers = this.formBuilder.group({
      flower: ['', Validators.required],
      location: ['', Validators.required],
      amount: ['', Validators.required],
      price: ['', Validators.required]
    });

    this.id = this.aRouter.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.edit();
  }

  addFlower(){

    const flower: Flores = {
      name: this.formsFlowers.get('flower')?.value,
      location: this.formsFlowers.get('location')?.value,
      amount: this.formsFlowers.get('amount')?.value,
      price: this.formsFlowers.get('price')?.value
    }

    if(this.id != null) {
      this.serviceFlower.editFlower(this.id, flower).subscribe(data => {
        Swal.fire(
          'Great!',
          'You have edited a flower!',
          'info'
        )
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.formsFlowers.reset();
      });
    }else {
      console.log(flower);
      this.serviceFlower.addFlower(flower).subscribe(data => {
        Swal.fire(
          'Great!',
          'You have added a flower!',
          'success'
        )
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.formsFlowers.reset();
      });
    }

    
  }

  edit(){
    if(this.id != null){
      this.title = "Edit Flower";
      this.serviceFlower.getFlower(this.id).subscribe(data => {
        this.formsFlowers.setValue({
          flower: data.name,
          location: data.location,
          amount: data.amount,
          price: data.price
        })
      })
    }
  }

}
