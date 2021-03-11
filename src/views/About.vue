<template>
  <div class="view-container">
    <div class="section section--spacing-bottom">
    </div>
    <section id="neatkey"></section>
    <div class="header-section__features">{{ $t("ABOUT US | ABOUT NEAT") }} </div>
      
    <!-- ABOUT US -->
    <div class="section">
      <div class="section__content content-container">
        <div class="dual-sections">
          <div class="dual-sections__info">
            <h2 class="dual-sections__title">
              {{ $t("pages.about.pageTitle1") }}
            </h2>
            <p>{{ $t("pages.about.pageSubTitle1") }}</p>
          </div>
          <div class="dual-sections__image dual-sections__image--med">
            <img src="../assets/images/team_img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- ABOUT US END -->

    <!-- ABOUT NEAT -->
    <div class="section">
      <div
        class="section__content section__content--thin-top content-container"
      >
        <div class="dual-sections dual-sections--reverse">
          <div class="dual-sections__info">
            <h2 class="dual-sections__title">
              {{ $t("pages.about.pageTitle2") }}
            </h2>
            <p>{{ $t("pages.about.pageSubTitle2") }}</p>
            
          </div>
          <div class="dual-sections__image dual-sections__image--sm">
            <img src="../assets/images/neat_img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- ABOUT NEAT END -->

    <!-- OUR MISSION -->
        <div class="section">
      <div class="section__content content-container">
        <div class="dual-sections">
          <div class="dual-sections__info">
            <h2 class="dual-sections__title">
              {{ $t("pages.about.pageTitle3") }}
            </h2>
            <p>{{ $t("pages.about.pageSubTitle3") }}</p>
          </div>
          <div class="dual-sections__image dual-sections__image--med">
            <img src="../assets/images/msn_img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- OUR MISSION END -->

    <div class="view-container">
    <div class="section section--spacing-bottom"></div>
    </div>
  </div>
</template>
