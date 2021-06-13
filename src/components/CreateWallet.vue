 <template>
    <div class="body-container">
       <button class="btn-generate" @click="genWallet">GENERATE</button>
      <div class="address-output"> 
        {{ address }}     
      </div>
      <div>
        <p v-show="address !== null">KINDLY REMINDER: Do not forget to save your wallet credentials. The wallet cannot be recovered if you lose the private key. Please keep it safe and
 be careful with how you use it and store it.
</p>
      </div>
      <div class="btn">
        <button class="btn-save" v-show="address !== null" @click="download"><i class="fa fa-download"></i>SAVE</button>
      </div>
    </div>
</template>

<script>
  let neatAccount = require("neatapi.js").account;

export default {
  components: "genWallet", 

  data() {
        return {address: null, privKey: null}
        
  },  

  methods: {
    genWallet() {      
      let account = neatAccount.create();
      let address = account.address;
      let privKey = account.privateKey;      
      this.account = account;
      this.address = address;
      this.privKey = privKey;
      //console.log(address, privKey);
    },

    download() {
      let walletFile = document.createElement('a');
      walletFile.download = this.account.address;
      let blob = new Blob([JSON.stringify (this.account.address) + '\n' + (this.account.privateKey)]);
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
  
  background-image: url('../assets/world-bg.jpg');
  text-align: center;
  padding: 80px 0px 40px 0px;
}

.address-output {
  font-size: 1.6em;
  margin: auto;
  text-align: center;
  color: #A6FF33;
  padding-top: 100px;
}

.btn {
  margin: auto;
  text-align: center;
}

.btn-generate { 
  background-color: #00BFFF;
  border: none;
  color: #000;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 20px;
}

.btn-generate:hover {
  background-color: #A6FF33;
}

.btn-save { 
  background-color: #00BFFF;
  border: none;
  color: black;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 20px;
}

.btn-save:hover {
  background-color: #A6FF33;
}

</style>>