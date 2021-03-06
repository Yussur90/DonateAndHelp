
let express = require('express') 
let session = require('express-session')
let bodyParser = require('body-parser')
const Nexmo = require('nexmo');
var path = require('path') 
let handler = require('./handler') 
const app = express() 

app.use(express.static(path.join(__dirname, '../react-client/dist'))) 
app.use(bodyParser.json({limit: '50mb'})) 
app.use(bodyParser.urlencoded({limit: '50mb', extended: true})) 
app.use(session({
  secret: 'very very secret', 
  resave: true, // It forces the session to be saved back to the session store
  saveUninitialized: true // If its true, the session object will be stored in the session store
})) 
const nexmo = new Nexmo({
  apiKey: '838662f6',
  apiSecret: 'g85V0tSPQDaC4O3N'
});

const Duraidi = new Nexmo({
  apiKey: '17a02e40',
  apiSecret: 'gIYjQnO6z6LI6guT'
});

const Yussur = new Nexmo({
  apiKey: 'c69f71a1',
  apiSecret: 'mbK1cnVdLch91u7v'
});
app.post('/serveiceSmsMais', handler.serveiceSmsMais);
app.post('/serveiceSms', handler.serveiceSms);
app.post('/serveiceSmsDuraidi', handler.serveiceSmsDuraidi)
app.post('/serveiceSmsYussur', handler.serveiceSmsYussur)
app.get("/getInfoForProfilePageforDonor", handler.getInfoForProfilePageforDonor) 
app.get("/getInfoForProfilePage", handler.getInfoForProfilePage) 
app.get('/getImage', handler.getImage) 
app.get('/getImage2', handler.getImage2) 
app.post('/loginCompany', handler.LoginCompany) 
app.post('/loginDonater', handler.LoginDonater) 
app.post('/Donater', handler.Signup) 
app.post('/Company', handler.SignupCompany) 
app.post('/photo', handler.uploadImage) 
app.post('/photo2', handler.uploadImage2) 
app.get('/logout', handler.logout) 
app.post('/profile_company', handler.addProfileCompany) 
app.get('/recieveMessage', handler.reciveMessag) 
app.post('/imageCampaign', handler.uploadImageCampaign) 
app.post('/Donorcampaign', handler.postDonorCampaign) 
app.post('/companycampaign', handler.postCompanyCampaign) 
app.post('/sendMessage', handler.sendMessage) 
app.post('/Profile_Donor', handler.addProfileDonor) 
app.post('/photoDonor', handler.uploadImageDonor) 
app.post('/photoDonor2', handler.uploadImageDonor2) 
app.get('/getImageDonor', handler.getImageDonor) 
app.get('/getImageDonor2', handler.getImageDonor2) 
app.get('/sessionName', handler.sessionName) 
app.get('/getPhotoForMessages', handler.getPhotoForMessages) 
app.get('/fetchDonorData', handler.fetchDonorData) 
app.get('/fetchCompanyData', handler.fetchCompanyData) 
app.get('/imageSearch', handler.imageSearch) 
app.post('/search_beneficiary', handler.searchBeneficiary) 
app.get('/donorCam', handler.donorCam) 
app.get('/companyCam', handler.companyCam) 
app.get('/imageSearchDonor', handler.imageSearchDonor) 
app.post('/search_donor', handler.searchDonor) 
app.post('/removeMsg', handler.removeMsg) 
app.post('/delCampaignDonor', handler.removeCampaignDonor) 
app.post('/delCampaignComp', handler.removeCampaignComp) 
app.put('/editCampaignDonor', handler.editCampaignDonor) 
app.put('/editCampaignComp', handler.editCampaignComp) 
app.post('/deleteAllMessages', handler.deleteAllMessages)
app.post('/editAmount' , handler.editAmount) 
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, '../react-client/dist/index.html')))
}) // This is the defualt render for the frontend client pages from the backend side

const PORT = process.env.PORT || 3000 

if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`The Port : ${PORT}`) 
  })
}

module.exports = app
