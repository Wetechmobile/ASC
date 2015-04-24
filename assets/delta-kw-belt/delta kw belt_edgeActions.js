
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",35000,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Delta_Plane}","click",function(sym,e){window.open("http://www.delta.com","_self");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","dblclick",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_KW_logo}","click",function(sym,e){window.open("http://www.kw.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Beltline}","click",function(sym,e){window.open("http://www.beltline.org","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-48471037");