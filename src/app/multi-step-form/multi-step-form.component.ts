import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css'],
})
export class MultiStepFormComponent {
  multiStepForm = new FormGroup({
    isAnnual: new FormControl(false),
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    // plans
    arcade: new FormControl(false),
    advanced: new FormControl(false),
    pro: new FormControl(false),
    // add-ons
    onlineService: new FormControl(false),
    largerStorage: new FormControl(false),
    customizableProfile: new FormControl(false),
  });

  // isAnnual = false;

  prices = {
    arcade: { monthly: 9, annually: 90 },
    advanced: { monthly: 12, annually: 120 },
    pro: { monthly: 15, annually: 150 },
    onlineService: { monthly: 1, annually: 10 },
    largerStorage: { monthly: 2, annually: 20 },
    customizableProfile: { monthly: 2, annually: 20 },
  };

  // plan = '';

  // plans = [false, false, false];

  // addOns = [false, false, false];

  // setPlan(plan: number) {
  //   this.plans = [false, false, false];
  //   this.plans[plan] = true;
  //   console.log(this.plans);
  // }

  // changePlan(plan: string) {
  //   this.plan = plan;
  // }

  setIsAnnual() {
    this.multiStepForm.patchValue({ isAnnual: true });
  }

  // setAddon(index: number) {
  //   this.addOns[index] = !this.addOns[index];
  //   console.log(this.addOns);
  // }

  setRadioPlan(controlName: string) {
    this.multiStepForm.patchValue({
      arcade: false,
      advanced: false,
      pro: false,
    });
    const patchObject: { [key: string]: boolean } = {};
    patchObject[controlName] = true;
    this.multiStepForm.patchValue(patchObject);
    console.log(this.multiStepForm.value);
  }

  setRadioAddon(controlName: string) {
    const patchObject: { [key: string]: boolean } = {};
    patchObject[controlName] = true;
    this.multiStepForm.patchValue(patchObject);
    console.log(this.multiStepForm.value);
  }

  test() {
    console.log(this.multiStepForm.value);
  }

  totalMonthly() {
    let nums = [];

    let total = 0;

    if (this.multiStepForm.value.arcade) {
      nums.push(this.prices.arcade.monthly);
    }

    if (this.multiStepForm.value.advanced) {
      nums.push(this.prices.advanced.monthly);
    }

    if (this.multiStepForm.value.pro) {
      nums.push(this.prices.pro.monthly);
    }

    if (this.multiStepForm.value.onlineService) {
      nums.push(this.prices.onlineService.monthly);
    }

    if (this.multiStepForm.value.largerStorage) {
      nums.push(this.prices.largerStorage.monthly);
    }

    if (this.multiStepForm.value.customizableProfile) {
      nums.push(this.prices.customizableProfile.monthly);
    }

    for (let i = 0; i < nums.length; i++) {
      total += nums[i];
    }

    return total;
  }

  totalAnnually() {
    let nums = [];

    let total = 0;

    if (this.multiStepForm.value.arcade) {
      nums.push(this.prices.arcade.annually);
    }

    if (this.multiStepForm.value.advanced) {
      nums.push(this.prices.advanced.annually);
    }

    if (this.multiStepForm.value.pro) {
      nums.push(this.prices.pro.annually);
    }

    if (this.multiStepForm.value.onlineService) {
      nums.push(this.prices.onlineService.annually);
    }

    if (this.multiStepForm.value.largerStorage) {
      nums.push(this.prices.largerStorage.annually);
    }

    if (this.multiStepForm.value.customizableProfile) {
      nums.push(this.prices.customizableProfile.annually);
    }

    for (let i = 0; i < nums.length; i++) {
      total += nums[i];
    }

    return total;
  }
}
