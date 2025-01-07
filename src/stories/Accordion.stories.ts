import { storiesOf } from '@storybook/angular';

 storiesOf('Accordion', module)

  .add('Large', () => ({
    template: `
    <div class="common-accordion" id="accordionSlide">

      <div class="card">
        <div class="card-header white-bg" id="headingOne">
            <h6 onclick="accordionIconChange()" id="accordionIconChange" class="show" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <span class="material-symbols-rounded accordion-add-icon">add</span>
              <span class="material-symbols-rounded accordion-remove-icon">remove</span>
              Collapsible Group Item #1
            </h6>
        </div>

        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionSlide">
          <div class="card-body white-bg">
            <p> Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the class. </p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingTwo">
          <h6  onclick="accordionIconChange()" id="accordionIconChange" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <span class="material-symbols-rounded accordion-add-icon">add</span>
          <span class="material-symbols-rounded accordion-remove-icon">remove</span>
            Collapsible Group Item #2
          </h6>
        </div>

        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSlide">
          <div class="card-body">
            <p> Some placeholder content for the second accordion panel. This panel is hidden by default. </p>
          </div>
        </div>
      </div>

    </div>
    `
  }))

  .add('Medium', () => ({
    template: `
    <div class="common-accordion medium" id="accordionSlideMedium">

      <div class="card">
        <div class="card-header" id="headingOne">
            <h6 data-toggle="collapse" data-target="#collapseOneMedium" aria-expanded="true" aria-controls="collapseOne">
              <span class="material-symbols-rounded accordion-add-icon">add</span>
              <span class="material-symbols-rounded accordion-remove-icon">remove</span>
              Collapsible Group Item #1
            </h6>
        </div>

        <div id="collapseOneMedium" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionSlideMedium">
          <div class="card-body">
            <p> Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the class. </p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingTwo">
          <h6 data-toggle="collapse" data-target="#headingTwoMedium" aria-expanded="false" aria-controls="collapseTwo">
          <span class="material-symbols-rounded accordion-add-icon">add</span>
          <span class="material-symbols-rounded accordion-remove-icon">remove</span>
            Collapsible Group Item #2
          </h6>
        </div>

        <div id="headingTwoMedium" class="collapse" aria-labelledby="headingTwoMedium" data-parent="#accordionSlideMedium">
          <div class="card-body">
            <p> Some placeholder content for the second accordion panel. This panel is hidden by default. </p>
          </div>
        </div>
      </div>

    </div>
    `
  }))
