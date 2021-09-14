/* eslint-disable no-param-reassign */
export {};

const leftColor = '#c5e226';
const rightColor = '#ffffff';

const rangeElList = document.querySelectorAll('.js-range');

const personRange = document.querySelector(
  '.js-person-range',
) as HTMLInputElement;
const adultsRange = document.querySelector(
  '.js-adults-range',
) as HTMLInputElement;
const kidsRange = document.querySelector('.js-kids-range') as HTMLInputElement;

const gainLabelEl = document.querySelector('.js-gain') as HTMLSpanElement;
const incomeLabelEl = document.querySelector('.js-income') as HTMLSpanElement;

let gain: number;
let income: number;

let personCurrentStep = 2;
let adultsCurrentStep = 2;
let kidsCurrentStep = 2;

const calcGain = () => {
  gain = (Number(personRange.value) * 4500
      + Number(adultsRange.value) * 10500
      + Number(kidsRange.value) * 8500);
  gainLabelEl.textContent = gain.toLocaleString();
  return gain;
};

const calcIncome = () => {
  income = calcGain() - 150000;
  incomeLabelEl.textContent = income.toLocaleString();
  return income;
};

calcGain();
calcIncome();

rangeElList.forEach(el => {
  const rangeEl = el as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  const currentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;
});

personRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  personCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (personCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (personCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcGain();
  calcIncome();
});

adultsRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  adultsCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (adultsCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (adultsCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcGain();
  calcIncome();
});

kidsRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  kidsCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (kidsCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (kidsCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcGain();
  calcIncome();
});
