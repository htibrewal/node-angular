const router = require('express').Router();

const questions = [
    {id:1, question:'l2p() and _offset in angular-plotly.js'},
    {id:2, question:'Angular 9 template interpolation removing backslashes'},
    {id:3, question:'Angular - is calling getValue on a BehaviorSubject going to affect subscribers that already got it'},
    {id:4, question:'What causes Angular to make a new http request after 120 Seconds if no response'},
    {id:5, question:'Ionic4-angular chatbot and dialogflow v2'},
    {id:6, question:'Would styleURL in an Angular component be faster or more efficient than having a compiled and transpiled app.css built from all the scss files?'},
    {id:7, question:'Piral with Angular for production use'},
    {id:8, question:'Javascript + AngularJS: JSON key values not updating on request'},
    {id:9, question:'Angular HttpClient getting null response after data getting larger size'},
    {id:10, question:'How can i open an excel file in Angular with MIME types?'},
    {id:11, question:'How i make my server detects modification in angular, if i use a lib with ng build'},
    {id:12, question:'Angular Route Change breaks Component Service Relationship for Observables'},
]

router.get('/', (req, res) => {
    res.status(200).send(questions);
});

module.exports = router;