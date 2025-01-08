import { storiesOf } from '@storybook/angular';
 storiesOf('Forms / Inputs', module)

  .add('Primary', () => ({
    template: `
    <div class="input-container f_w">
      <label class="f_w"> Text field / Default </label>
      <div class="input-icon-container f_w">
        <input type="text" class="input-style f_w" placeholder="Enter the text"/>
      </div>

      <label class="f_w"> Text field / Default </label>
      <div class="input-icon-container f_w">
        <input type="text" class="input-style style-2 f_w" placeholder="Enter the text"/>
      </div>

      <label class="f_w"> Text field / Default </label>
      <div class="input-icon-container f_w">
        <input type="text" class="input-style style-3 f_w" placeholder="Enter the text"/>
      </div>
    </div>
    `
  }))

  .add('Input style', () => ({
    template: `
    <div class="input-container f_w">
      <form action="/action_page.php">
        <fieldset class="fieldset-div f_w">
          <legend>Text field / Default</legend>
          <input type="text" class="input-style f_w" placeholder="Enter the text"/>
        </fieldset>
      </form>
      <label class="f_w"> Text field / Default </label>
      <div class="input-icon-container f_w">
        <input type="text" class="input-style f_w" placeholder="Enter the text"/>
      </div>
    </div>
    `
  }))

  .add('Success', () => ({
    template: `
    <div class="input-container f_w">
      <label class="f_w"> Text field / Success</label>
      <div class="input-icon-container success f_w">
        <input type="text" class="input-style f_w" placeholder="Enter the text"/>
      </div>

      <label class="f_w"> Text field / Success</label>
      <div class="input-icon-container success f_w">
        <input type="text" class="input-style style-2 f_w" placeholder="Enter the text"/>
        <span class="right-icon"><img src="../assets/images/Vector (12).svg" /></span>
      </div>

      <label class="f_w"> Text field / Success</label>
      <div class="input-icon-container success f_w">
        <input type="text" class="input-style style-3 f_w" placeholder="Enter the text"/>
        <span class="right-icon"><img src="../assets/images/Vector (12).svg" /></span>
      </div>
    </div>
    `
  }))

  .add('Error', () => ({
    template: `
     <div class="input-container f_w">
      <label class="f_w"> Text field / Error</label>
      <div class="input-icon-container error f_w">
        <input type="text" class="input-style f_w" placeholder="Enter the text"/>
      </div>

      <label class="f_w"> Text field / Error</label>
      <div class="input-icon-container error f_w">
        <input type="text" class="input-style style-2 f_w" placeholder="Enter the text"/>
        <span class="right-icon"><img src="../assets/images/Info Circle.svg" /></span>
      </div>
      <div class="input-divider f_w">
          <span class="alert f_w"> Invalid characters </span>
      </div>

      <label class="f_w"> Text field / Error</label>
      <div class="input-icon-container error f_w">
        <input type="text" class="input-style style-3 f_w" placeholder="Enter the text"/>
        <span class="right-icon"><img src="../assets/images/Union.svg" /></span>
      </div>
    </div>
    `
  }))

  .add('Disabled', () => ({
    template: `
    <div class="input-container f_w">
      <label class="f_w"> Text field / Disable </label>
      <div class="input-icon-container disabled f_w">
        <input type="text" class="input-style f_w common-input" placeholder="Enter the text" disabled/>
      </div>

      <label class="f_w"> Text field / Disable </label>
      <div class="input-icon-container disabled f_w">
        <input type="text" class="input-style style-3 f_w common-input" placeholder="Enter the text" disabled/>
        <span class="right-icon"><img src="../assets/images/Ellipse 60.svg" /></span>
      </div>
    </div>
    `
  }))

  .add('Sizes', () => ({
    template: `

    <div class="input-container">
      <label class="f_w">Text field / Default (24px)</label>
      <input type="text" class="common-input x-small sizes input-style f_w" placeholder="Enter the text"/>
    </div>
    <div class="input-container">
      <label class="f_w"> Text field / Default (28px) </label>
      <input type="text" class="common-input small sizes input-style f_w" placeholder="Enter the text"/>
    </div>
     <div class="input-container medium">
      <label class="f_w"> Text field / Default (32px) </label>
      <input type="text" class="common-input medium sizes input-style f_w" placeholder="Enter the text"/>
    </div>
    <div class="input-container large">
      <label class="f_w"> Text field / Default (38px) </label>
      <input type="text" class="common-input large sizes input-style f_w" placeholder="Enter the text"/>
    </div>
    <div class="input-container x-large">
      <label class="f_w"> Text field / Default (42px)</label>
      <input type="text" class="common-input x-large sizes input-style f_w" placeholder="Enter the text"/>
    </div>
    <div class="input-container xx-large">
      <label class="f_w"> Text field / Default (28px) </label>
      <input type="text" class="common-input xx-large sizes input-style f_w" placeholder="Enter the text"/>
    </div>
    `
  }))

  .add('With Icons', () => ({
    template: `
    <div class="input-container f_w">
      <label class="f_w"> Text field / Default </label>
      <div class="input-icon-container f_w icons-input">
        <span class="left-icon"><img src="../assets/images/Profile.svg" /></span>
        <input type="text" class="input-style f_w" placeholder="Enter the text"/>
      </div>
      <label class="f_w"> Text field / Default </label>
      <div class="input-icon-container f_w icons-input">
        <span class="left-icon"><img src="../assets/images/Profile1.svg" /></span>
        <input type="text" class="input-style f_w" placeholder="Enter the text"/>
      </div>
    </div>
    `
  }))

  .add('Browse Input', () => ({
    template: `
    <div class="input-container">
      <label class="f_w">Upload your file  </label>
      <div class="input-icon-container f_w file-input-outer">

        <span class="left-icon"><img src="../assets/images/Paper.svg" /></span>
        <input type="file" class="file-input f_w" placeholder="File Input"/>
        <div class="file-input-inner dashed-border secondary-light-bg secondary-border-color">
          <p>Upload</p>
        </div>
      </div>
      <label class="f_w"> Upload your file </label>
      <div class="input-icon-container f_w file-input-outer large">

        <span class="left-icon"><img src="../assets/images/Paper.svg" /></span>
        <input type="file" class="file-input f_w" placeholder="File Input"/>
        <div class="file-input-inner dashed-border secondary-light-bg secondary-border-color">
          <p>Upload</p>
        </div>
      </div>
      <label class="f_w"> Upload your file </label>
      <div class="input-icon-container f_w file-input-outer large2">
        <input type="file" class="f_w" placeholder="File Input"/>
        <div class="file-input-inner dashed-border secondary-light-bg secondary-border-color">
          <p>Upload</p>
        </div>
    </div>
    `
  }))

  .add('Line Input', () => ({
    template: `
     <div class="input-container">
      <label class="f_w">Text field / Default (24px)</label>
      <input type="text" class="common-input x-small-input input-sizes input-style f_w" placeholder="Enter the text"/>
    </div>
    <div class="input-container">
      <label class="f_w"> Text field / Default (28px) </label>
      <input type="text" class="common-input small-input input-sizes input-style f_w" placeholder="Enter the text"/>
    </div>
     <div class="input-container medium">
      <label class="f_w"> Text field / Default (32px) </label>
      <input type="text" class="common-input medium-input input-sizes input-style f_w" placeholder="Enter the text"/>
    </div>
    <div class="input-container large">
      <label class="f_w"> Text field / Default (38px) </label>
      <input type="text" class="common-input large-input input-sizes input-style f_w" placeholder="Enter the text"/>
    </div>
    <div class="input-container x-large">
      <label class="f_w"> Text field / Default (42px)</label>
      <input type="text" class="common-input x-large-input input-sizes input-style f_w" placeholder="Enter the text"/>
    </div>
    `
  }))

  // .add('Line Input Sizes', () => ({
  //   template: `
  //   <div class="input-container">
  //     <input type="text" class="line-input" placeholder="Large"/>
  //   </div>

  //   <div class="input-container">
  //     <input type="text" class="line-input medium" placeholder="Medium"/>
  //   </div>

  //   <div class="input-container">
  //     <input type="text" class="line-input small" placeholder="Small"/>
  //   </div>
  //   `
  // }))
