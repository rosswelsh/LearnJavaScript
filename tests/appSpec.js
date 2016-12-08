/**
 * Created by davem on 27/11/2016.
 */

'use strict';
var learnjavascript={};

learnjavascript.showView = function (hash){
    var questionView =$ ('<div class ="question-view">').text('Arriving Soon!');
    ${'view-container').empty().append(questionView);
}

describe('LearnJavascript', function (){
    it('can show question view',function () {
        Learnjavascript.showView('#question-1');
        expect($('.view-container.question-view').length).toEqual(1);

    });
});