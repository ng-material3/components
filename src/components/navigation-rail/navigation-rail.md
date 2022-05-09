<md3-navigation-rail
  [direction]="'center'"
  [divider]="true"
  [elevated]="true">

  <md3-icon-button
    class="md3-navigation-rail-menu-button">

    <span
      class="material-icons-outlined">menu</span>

  </md3-icon-button>

  <div
    class="md3-navigation-rail-buttons">
  
    <md3-navigation-rail-button
      class="md3-navigation-rail-button--selected">

      <span
        class="md3-navigation-rail-button-icon md3-navigation-rail-button-icon--default-icon material-icons-outlined">folder</span>

      <span
        class="md3-navigation-rail-button-icon md3-navigation-rail-button-icon--selected-icon material-icons">folder</span>

      <span
        class="md3-navigation-rail-button-label-text">Folder</span>

    </md3-navigation-rail-button>
  
    <md3-navigation-rail-button>

      <span
        class="md3-navigation-rail-button-icon md3-navigation-rail-button-icon--default-icon material-icons-outlined">star_outline</span>

      <span
        class="md3-navigation-rail-button-icon md3-navigation-rail-button-icon--selected-icon material-icons">star</span>

      <span
        class="md3-navigation-rail-button-label-text">Favorites</span>

    </md3-navigation-rail-button>
  
  </div>

</md3-navigation-rail>