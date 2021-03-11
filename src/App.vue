<template>
  <div class="page-container" v-bind:class="{ navActive: navActive }">
    <div class="header">
      <div class="header__content content-container">
        <div class="header__logo">
          <router-link to="/"
            ><img
              src="./assets/images/neat_logo.png"
              alt="NEAT"
              width="136"
              height="68"
          /></router-link>
        </div>
        
        <div class="nav" v-bind:class="{ 'nav--active': navActive }">

          <div class="nav__item" @click="onClickNav()">
            <router-link to="/">{{ $t("pageLink.home") }}</router-link>
          </div>


          <div class="nav__item" @click="onClickNav()">
            <router-link to="/about">{{
              $t("pageLink.about")
            }}</router-link>
          </div>
          <div class="nav__item" @click="onClickNav()">
            <router-link to="/features">
            {{ $t("Features") }}
            </router-link>
          </div>

          <div class="nav__item" @click="onClickNav()">
            <a href="https://wallet.neatio.org" target="_blank">{{
              $t("WALLET")
            }}</a>
          </div>

          <div class="nav__item" @click="onClickNav()">
            <a href="https://scanner.neatio.org" target="_blank">{{
              $t("SCANNER")
            }}</a>
          </div>



        </div>
        <div
          class="nav-toggle"
          @click="navToggleOnClick()"
          v-bind:class="{ 'nav-toggle--active': navActive }"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- #header end -->
    <router-view />
    <footer class="footer">
      <div class="footer__main">
        <div class="footer__col footer__col--left">

          <!-- GET IN TOUCH | GET INVOLVED -->
          <div class="footer__logo">  
            <div class="footer__menu_caption">{{ $t("GET IN TOUCH | GET INVOLVED") }}</div>
          </div>        
          <div class="footer__title"></div>
          <div class="footer__social-media">
            <ul>

              <!-- DISCORD -->
              <li class="">
                <a
                  href="https://discord.gg/MF3YJdxyFb"
                  target="_blank"
                  rel="noopener"
                  ><img
                    src="./assets/images/social-media/Discord_white.png"
                    alt=""
                    width="24"
                /></a>
              </li>
             
              <!-- TWITTER -->
              <li class="">
                <a
                  href="https://twitter.com/neat_io"
                  target="_blank"
                  rel="noopener"
                  ><img
                    src="./assets/images/social-media/Twitter_white.png"
                    alt=""
                    width="24"
                /></a>
              </li>

              <!-- EMAIL -->
              <li class="">
                <a
                  href="mailto:contact@neatio.org"
                  target="_blank"
                  rel="noopener"
                  ><img
                    src="./assets/images/social-media/Email_white.png"
                    alt=""
                    width="24"
                /></a>
              </li>

              <!-- REDDIT -->
              <li class="">
                <a
                  href="https://www.reddit.com/r/neatio/"
                  target="_blank"
                  rel="noopener"
                  ><img
                    src="./assets/images/social-media/Reddit_white.png"
                    alt=""
                    width="24"
                /></a>
              </li>


              <!-- BITCOINTALK -->
              <li class="">
                <a
                  href="https://bitcointalk.org"
                  target="_blank"
                  rel="noopener"
                  ><img
                    src="./assets/images/social-media/Bitcointalk_white.png"
                    alt=""
                    width="24"
                /></a>
              </li>
 
              <!-- GITHUB -->
              <li class="">
                <a
                  href="https://github.com/neatlab"
                  target="_blank"
                  rel="noopener"
                  ><img
                    src="./assets/images/social-media/Github_white.png"
                    alt=""
                    width="24"
                /></a>
              </li>
            </ul>
          </div>
        </div>

        </div>
      <div class="footer__bottom">
        
        <div class="footer__bottom-info">
          

          <div>
             <router-link to="/terms">{{$t("Terms")}}</router-link>
          </div>

          <div class="footer__copyright">
            &copy; {{ year }} Neatio
          </div>

        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import i18n from "@/plugins/i18n";

export default {
  name: "app",
  data() {
    return {
      navActive: false as boolean,
      year: new Date().getFullYear(),
      languages: [
        { flag: "en", language: "en", title: "En" },
        { flag: "zh_CN", language: "zhCN", title: "中" }
      ]
    };
  },
  methods: {
    changeLocale(locale: string) {
      i18n.locale = locale;
    },
    navToggleOnClick(): void {
      this.navActive = !this.navActive;
    },
    onClickNav(): void {
      this.navActive = false;
    }
  }
};
</script>

<style lang="scss">
.page-container {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $contentPrimary;
  width: 100vw;
}

.header {
  height: $headerHeight;
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: center;

  @include mq-lrg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    width: 100vw;

    .navActive & {
      position: relative;
      height: 100vh;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;

    @include mq-lrg {
      display: block;

      .navActive & {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }

  &__logo {
    position: relative;
    width: 68px;
    height: 68px;

    a {
      width: 100%;
      height: 100%;
      display: block;
    }

    @include mq-lrg {
      position: absolute;
      left: 40px;
    }

    @include mq-med {
      position: absolute;
      left: 20px;
    }

    @include mq-sml {
      position: absolute;
      left: 16px;
    }
  }
}

.view-container {
  .navActive & {
    display: none;
  }
}

.nav {
  padding: 10px;
  margin-left: auto;
  display: flex;
  align-items: center;

  @include mq-lrg {
    padding-top: 60px;
    display: block;
    background: transparent;
    display: none;

    &--active {
      display: block;
    }
  }

  &__item {

//start custom link line
a {
  color: #A6FF33;
  font-size: 20px;
  text-transform: uppercase;
  font-family: "Computer";
  text-decoration: none;
  //letter-spacing: 0.1em;
  
  display: inline-block;
  padding: 3px;
  position: relative;
}
a:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: relative;
  background: #A6FF33;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
a:hover:after { 
  width: 100%; 
  left: 0; 
}
// end custom line


    a {
      @include font-size(1.4);
      color:#00BFFF;             //color nav links
      text-decoration: none;
      margin: 0 16px;

      &:hover {
        text-decoration: none;
        color: $navHighlight;
      }

      @include mq-lrg {
        @include font-size(1.6);
        padding: 14px 40px;
        display: block;
        text-align: center;
      }

      &.router-link-exact-active {
        color: $navHighlight;
      }
    }
  }
}

// END nav bar 

.lang-select {
  display: flex;
  align-items: center;
  justify-content: center;

  @include mq-lrg {
    padding: 10px;
  }

  &__btn {
    cursor: pointer;
    color: $contentLight;
    border: 1px solid $divider;
    font-size: 10px;
    margin: 2px;
    display: inline-flex;
    height: 20px;
    width: 20px;
    justify-content: center;
    align-items: center;

    @include mq-lrg {
      @include font-size(1.3);
      margin: 4px;
      height: 30px;
      width: 30px;
    }
  }
}

.nav-toggle {
  width: 40px;
  cursor: pointer;
  z-index: 6000;
  position: absolute;
  right: 24px;
  top: 17px;
  display: none;

  @include mq-lrg {
    display: block;
  }

  span {
    @include transition(background-color);
    @include transition(transform);
    transform-origin: 100% 3px;
    display: block;
    width: 100%;
    height: 6px;
    background-color: $highlight;
    margin-bottom: 8px;

    &:first-child {
      transform: rotate(0deg);
    }

    &:nth-child(2) {
      @include transition(opacity);
      opacity: 1;
    }

    &:last-child {
      transform: rotate(0deg);
      margin-bottom: 0;
    }
  }

  &--active {
    span {
      @include transition(transform);
      background-color: $highlight;

      &:first-child {
        transform: rotate(-44deg);
      }

      &:nth-child(2) {
        @include transition(opacity);
        opacity: 0;
      }

      &:last-child {
        transform: rotate(44deg);
        margin-bottom: 0;
      }
    }
  }
}
</style>
