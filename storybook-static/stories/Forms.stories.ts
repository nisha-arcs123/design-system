import { storiesOf } from '@storybook/angular';


 storiesOf('Forms / Inputs', module)

  .add('Primary', () => ({
    template: `
    <div class="input-container f_w">
      <label class="f_w"> Primary </label>
      <div class="input-icon-container f_w">
        <span class="left-icon"><img src="../assets/images/user.svg" /></span>
        <input type="text" class="input-style f_w" placeholder="Email address"/>
      </div>
      <div class="input-divider f_w">
        <span class="alert f_w"> Please enter valid email address </span>
      </div>
    </div>
    `
  }))

  .add('Success', () => ({
    template: `
    <div class="input-container">
      <label> Success </label>
      <input type="text" class="common-input success" placeholder="Email address"/>
    </div>
    `
  }))

  .add('Error', () => ({
    template: `
    <div class="input-container">
      <label> Error </label>
      <input type="text" class="common-input error" placeholder="Email address"/>
      <span class="error-msg"> Please enter valid email address </span>
    </div>
    `
  }))

  .add('Disabled', () => ({
    template: `
    <div class="input-container">
      <label> Disabled </label>
      <input type="text" class="common-input" placeholder="Email address" disabled/>
    </div>
    `
  }))

  .add('Sizes', () => ({
    template: `
    <div class="input-container x-large">
      <label> X-Large </label>
      <input type="text" class="common-input x-large" placeholder="Email address"/>
    </div>

    <div class="input-container large">
      <label> Large </label>
      <input type="text" class="common-input large" placeholder="Email address"/>
    </div>

    <div class="input-container medium">
      <label> Medium </label>
      <input type="text" class="common-input" placeholder="Email address"/>
    </div>

    <div class="input-container">
      <label> Small </label>
      <input type="text" class="common-input small" placeholder="Email address"/>
    </div>
    `
  }))

  .add('With Icons', () => ({
    template: `
    <div class="input-container icon-x-large">
      <label> X-Large </label>
      <div class="input-icon-outer">
        <span class="icon icon-login-user"></span>
        <input type="text" class="common-input x-large" placeholder="Email address"/>
      </div>
    </div>

    <div class="input-container icon-large">
      <label> Large </label>
      <div class="input-icon-outer">
        <span class="icon icon-login-user"></span>
        <input type="text" class="common-input large" placeholder="Email address"/>
      </div>
    </div>

    <div class="input-container icon-medium">
      <label> Medium </label>
      <div class="input-icon-outer">
        <span class="icon icon-login-user"></span>
        <input type="text" class="common-input" placeholder="Email address"/>
      </div>
    </div>

    <div class="input-container icon-small">
      <label> Small </label>
      <div class="input-icon-outer">
        <span class="icon icon-login-user"></span>
        <input type="text" class="common-input small" placeholder="Email address"/>
      </div>
    </div>
    `
  }))

  .add('Browse Input', () => ({
    template: `
    <div class="input-container">
      <label> Extra Large </label>
      <div class="file-input-outer">
        <input type="file" class="file-input" placeholder="File Input"/>
        <div class="file-input-inner dashed-border secondary-light-bg secondary-border-color">
          <p> Drag & drop or <span class="secondary-color"> browse </span> </p>
        </div>
      </div>
    </div>

    <div class="input-container">
      <label> Large </label>
      <div class="file-input-outer large">
        <input type="file" class="file-input" placeholder="File Input"/>
        <div class="file-input-inner dashed-border secondary-light-bg secondary-border-color">
          <p> Drag & drop or <span class="secondary-color"> browse </span> </p>
        </div>
      </div>
    </div>

    <div class="input-container">
      <label> Medium </label>
      <div class="file-input-outer medium">
        <input type="file" class="file-input" placeholder="File Input"/>
        <div class="file-input-inner dashed-border secondary-light-bg secondary-border-color">
          <p> Drag & drop or <span class="secondary-color"> browse </span> </p>
        </div>
      </div>
    </div>

    <div class="input-container">
      <label> Small </label>
      <div class="file-input-outer small">
        <input type="file" class="file-input" placeholder="File Input"/>
        <div class="file-input-inner dashed-border secondary-light-bg secondary-border-color">
          <p> Drag & drop or <span class="secondary-color"> browse </span> </p>
        </div>
      </div>
    </div>
    `
  }))

  .add('Line Input', () => ({
    template: `
    <div class="input-container">
      <input type="text" class="line-input" placeholder="Line Input"/>
    </div>
    `
  }))

  .add('Line Input Sizes', () => ({
    template: `
    <div class="input-container">
      <input type="text" class="line-input" placeholder="Large"/>
    </div>

    <div class="input-container">
      <input type="text" class="line-input medium" placeholder="Medium"/>
    </div>

    <div class="input-container">
      <input type="text" class="line-input small" placeholder="Small"/>
    </div>
    `
  }))
