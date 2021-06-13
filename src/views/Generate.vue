<template>
    <div class="body-container"> 
       <button class="btn2-generate" @click="genWallet">GENERATE</button>
       <div class="note-text1" v-show="address !== null">
       <div class="hero__subTitle">{{ $t("pages.generate.walletAddress")}}</div>
       </div>
      <div class="hero__title"> 
        {{ address }}     
      </div>
         <div class="hero__subTitle2" v-show="address !== null">
            {{ $t("pages.generate.disclaimer1")}}
         </div>
           <div class="hero__subTitle2" v-show="address !== null">
            {{ $t("pages.generate.disclaimer2")}}
         </div>  <div class="hero__subTitle2" v-show="address !== null">
            {{ $t("pages.generate.disclaimer3")}}
         </div>  <div class="hero__subTitle2" v-show="address !== null">
            {{ $t("pages.generate.disclaimer4")}}
         </div>

      <div class="btn2">
        <button class="btn2-save" v-show="address !== null" @click="download"><i class="fa fa-download"></i>SAVE</button>
      </div>
    </div>
</template>

<script>
  const neatAccount = require("neatio").account;

export default {
  components: "genWallet", 

  data() {
        return {address: null, privKey: null}
        
  },  

  methods: {
    genWallet() {      
      const account = neatAccount.create();
      const address = account.address;
      const privKey = account.privateKey;      
      this.account = account;
      this.address = address;
      this.privKey = privKey;
      //console.log(address, privKey);
    },

    download() {
      const walletFile = document.createElement('a');
      walletFile.download = this.account.address;
      const blob = new Blob(["Your private key is: " + '\n' + (this.account.privateKey)]);
      walletFile.href = URL.createObjectURL(blob);
      document.body.appendChild(walletFile);
      walletFile.click();
      document.body.removeChild(walletFile);
      
    }
  },
}
</script>

<style scoped>

.body-container {
  
  text-align: center;
  padding: 120px 0px 120px 0px;
}

.address-output {
  font-size: 20px;  
  text-align: center;
  color: #A6FF33;
}

.btn2 {
  margin: auto;
  text-align: center;
  padding-top: 80px;
}

.btn2-generate { 
  background-color: #00BFFF;
  border: none;
  color: #000;
  padding: 7px 13px;
  cursor: pointer;
  font-size: 16px;
}

.btn2-generate:hover {
  background-color: #A6FF33;
}

.btn2-save { 
  background-color: #00BFFF;
  border: none;
  color: black;
  padding: 7px 13px;
  cursor: pointer;
  font-size: 16px;
}

.btn2-save:hover {
  background-color: #A6FF33;
}

.note-text1 {
  text-align: center;
  padding: 40px 20px 40px 20px;
}
</style>
