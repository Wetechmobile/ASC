
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",32000,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_HD1}","click",function(sym,e){window.open("http://www.homedepot.com/","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Chick_fil_a}","click",function(sym,e){window.open("http://www.chick-fil-a.com/","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_GP2}","click",function(sym,e){window.open("http://www.georgiapower.com","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-110066065");