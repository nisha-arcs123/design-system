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

// Buttons sections

  storiesOf('Forms / Buttons', module)

  .add('Primary Button', () => ({
    template: `
    <div class="button-container f_w">
      <label class="f_w"> Primary Button </label>
      <button class="primary-btn btn f_w">Create new user</button>
    </div>
    `
  }))


  .add('Secondary Button', () => ({
    template: `
    <div class="button-container f_w">
      <label class="f_w"> Secondary Button </label>
      <button class="secondary-btn btn f_w">Create new user</button>
    </div>
    `
  }))

  .add('Tertiary Button', () => ({
    template: `
    <div class="button-container f_w">
      <label class="f_w"> Tertiary Button</label>
      <button class="tertiary-btn btn f_w">Create new user</button>
    </div>
    `
  }))

  .add('Secondary Button2', () => ({
    template: `
    <div class="button-container f_w">
      <label class="f_w"> Secondary Button 2 </label>
      <button class="secondary-btn2 btn f_w">Create new user</button>
    </div>
    `
  }))

  .add('Destructive Button', () => ({
    template: `
    <div class="button-container f_w">
      <label class="f_w"> Destructive Button </label>
      <button class="destructive-btn btn f_w">Create new user</button>
    </div>
    `
  }))

  // Button groups


  storiesOf('Forms / Buttons Groups', module)

  .add('Primary Button', () => ({
    template: `
    <div class="button-container f_w">
      <label class="f_w"> Primary Button </label>
      <div class="btn-content primary">
        <button class="primary-btn grp-btn">Create new user</button>
        <button class="primary-btn grp-btn2">Create new user</button>
        <button class="primary-btn grp-btn">Create new user</button>
      </div>
    </div>
    `
  }))


  .add('Secondary Button', () => ({
    template: `
    <div class="button-container f_w">
      <label class="f_w"> Secondary Button </label>
      <div class="btn-content secondary">
        <button class="secondary-btn grp-btn">Create new user</button>
        <button class="secondary-btn grp-btn2">Create new user</button>
        <button class="secondary-btn grp-btn">Create new user</button>
      </div>
      
    </div>
    `
  }))

  .add('Tertiary Button', () => ({
    template: `
    <div class="button-container f_w">
      <label class="f_w"> Tertiary Button </label>
      <div class="btn-content tertiary"> 
        <button class="tertiary-btn grp-btn">Create new user</button>
        <button class="tertiary-btn grp-btn2">Create new user</button>
        <button class="tertiary-btn grp-btn">Create new user</button>
      </div>
     
    </div>
    `
  }))

  .add('Secondary Button2', () => ({
    template: `
    <div class="button-container f_w">
      <label class="f_w"> Secondary Button 2 </label>
      <div class="btn-content secondary2"> 
        <button class="secondary-btn2 grp-btn">Create new user</button>
        <button class="secondary-btn2 grp-btn2">Create new user</button>
        <button class="secondary-btn2 grp-btn">Create new user</button>
      </div>
     
    </div>
    `
  }))

  .add('Destructive Button', () => ({
    template: `
    <div class="button-container f_w">
      <label class="f_w"> Destructive Button </label>
      <div class="btn-content destructive">
        <button class="destructive-btn grp-btn">Create new user</button>
        <button class="destructive-btn grp-btn2">Create new user</button>
        <button class="destructive-btn grp-btn">Create new user</button>
      </div>
      
    </div>
    `
  }))


  // Tables




  storiesOf('Forms / Tables', module)

  .add('Primary Table', () => ({
    template: `
    <div class="tables-container f_w">
      <table class="primary-table f_w">
          <tr class="f_w">
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
          <tr class="f_w">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr class="f_w">
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr class="f_w">
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
      </table>
    </div>
    `
  }))

