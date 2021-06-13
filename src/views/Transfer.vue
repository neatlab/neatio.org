<template>

    <div class="body-container">
       
      <div class="hero__title" v-show="address == null"> 
        <input type="text" v-model="keyInput" placeholder=" Put Your Private Key In Here">
      </div>
      
      <div class="hero__title" v-show="address == null">
        <button class="btn2-generate" @click="importKey">IMPORT</button>
      </div>     

       
      <div class="hero__addr"> 
        {{ address }}  
      </div>

      <div class="hero__addr" v-show="address !== null">         
          Your Balance is: <div class="hero__balance">{{ balance }}</div> NEAT        
      </div>

    </div>
</template>

<script>

import axios from "axios";

export default {
  components: "importWallet", 

  data() {
       return {address: null, balance: null}
        
  },  

  methods: {

    importKey() {
      const account = require("neatio").account;
      const Nat = require("neatio").nat;
      const Utils = require("neatio").utils;
      const privKey = this.keyInput
      const wallet = account.fromPrivate(privKey);
      this.address = wallet.address;
    
      
      const address = this.address;
      const data = {"jsonrpc":"2.0","method":"neat_getBalance","params":[`${address}`, "latest"],"id":1};

      axios.post('http://135.181.195.79:9915/testnet', data)
      .then(response => this.balance = Utils.toNEAT(Nat.toString(response.data.result)));

    },    
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
