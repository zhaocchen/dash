/**
 *
 * @param elem table
 * @param params 参数OBJECT
 *        {
 *            height : 200 , //若无父滚动DIV则按此高度添加
 *            freezeTop : 200, //固定表头所在位置
 *            scroller : window, //父滚动元素
 *            dynamicDiv : jsDomElement //不定表头TopDiv
 *        }
 * @returns {boolean}
 */



var tableFreezeHeader = function(elem,params){
    if(!elem || elem.tagName.toLowerCase() != "table")return false;
    if(params){
        if(params.height == undefined && params.top == undefined && params.dynamicDiv == undefined) return false;
        if(params.height !== undefined && params.height >= elem.clientHeight) return false;
    }
    else{
        // if (elem.parentNode.tagName.toLowerCase() == "div" && elem.clientHeight <= elem.parentNode.clientHeight)return false;
    }


    var TABLE_ID = document.querySelectorAll('.freezeHeader').length + 1;

    var obj = {
        id: elem.id || ('tbl-' + TABLE_ID),
        table: elem,
        header: elem.querySelector('thead'),
        scroller: window,
        divScroll: null,
        container: null,
        isFreezeTop: params && ( params.top !== undefined || params.dynamicDiv !== undefined)
    };

    if (params && params.height !== undefined) {
        obj.divScroll = document.createElement("div");
        obj.divScroll.id = "hdScroll" + obj.id ;
        obj.divScroll.style.height = params.height + 'px';
        obj.divScroll.style.overflowY = 'auto';
    }


    if(params){
        if(params.height !== undefined) {
            if (!document.querySelector('#hdScroll' + obj.id)) {
                obj.table.parentNode.insertBefore(obj.divScroll,obj.table).appendChild(obj.table);
                obj.scroller = document.querySelector('#hdScroll' + obj.id);
            }
        }else if(obj.isFreezeTop){
            obj.scroller = params.scroller || window;
        }
    }else{
        if (obj.table.parentNode.tagName.toLowerCase() == "div") {
            obj.scroller = obj.table.parentNode;
        }
    }

    if (!document.querySelector('#hd' + obj.id)) {
        var hd = document.createElement('div');
        hd.id = "hd" + obj.id;
        obj.table.parentNode.insertBefore(hd,obj.table);
    }else{
        document.querySelector('#hd' + obj.id).parentNode.removeChild(document.querySelector('#hd' + obj.id));
    }
    obj.container = document.querySelector('#hd' + obj.id);
    obj.container.style.position = 'fixed';
    obj.container.style.overflow = 'hidden';
    obj.container.style.top = obj.scroller == window ? 0 : obj.scroller.getBoundingClientRect().top + "px";
    obj.container.style.width = (obj.isFreezeTop ? obj.table.parentNode.clientWidth : obj.scroller.clientWidth) + 'px';

    cloneHeaderRow(obj);

    if(obj.isFreezeTop){
        var lastTr = obj.table.querySelector('tbody tr:last-child');
        var scrollDivTop = obj.scroller == window ? 0 : obj.scroller.getBoundingClientRect().top;
    }

    var headerHeight = obj.header.getBoundingClientRect().height;
    var evenWidth = obj.scroller.clientWidth;

    containerScroll();

    obj.scroller.addEventListener('scroll', containerScroll);
    window.addEventListener('resize',headerResize);

    /**
     * 滚动
     */
    function containerScroll() {
        if(!obj.container.clientWidth){
            obj.scroller.removeEventListener('scroll',containerScroll);
        }else{
            if(obj.isFreezeTop) {
                var freezeTop = params.dynamicDiv.clientHeight || params.top;
                var lastTop = lastTr.getBoundingClientRect().top;
                var headerTop = obj.header.getBoundingClientRect().top;
                if(headerTop - scrollDivTop < freezeTop && lastTop - scrollDivTop - headerHeight > freezeTop){
                    showFreeze(obj);
                    obj.container.style.top = (scrollDivTop +  freezeTop) + "px";
                }else{
                    hideFreeze(obj);
                }
            }else{
                if (obj.scroller.scrollTop > headerHeight) {
                    showFreeze(obj);
                } else {
                    hideFreeze(obj);

                }
            }

            obj.container.querySelector('table').style.marginLeft = (-obj.scroller.scrollLeft) + 'px';
        }

    }

    /**
     * 自适应
     */
    function headerResize() {
        if(!obj.container.clientWidth){
            window.removeEventListener('resize',headerResize);
        }else{
            var nowWidth = obj.scroller.clientWidth;
            // if(evenWidth != nowWidth){
                obj.container.style.width = nowWidth + 'px';
                obj.container.querySelector('table').style.width = obj.table.clientWidth + 'px';
            var arr = Array.prototype.slice.call(obj.container.querySelectorAll('th'));
            arr.forEach(function (th,index) {
                var cellWidth = document.defaultView.getComputedStyle(obj.table.querySelectorAll('th')[index]).width;
                th.style.width = cellWidth;
            });

            // }
        }
    }

    /**
     * 创建固定表头
     * @param obj
     */
    function cloneHeaderRow(obj) {
        obj.container.innerHTML = "";
        obj.container.className = "freezeHeader" ;

        var freezeTable = document.createElement("table");
        var freezeHeader = document.createElement("thead");

        var attributes = obj.table.attributes;
        for(var i=0;i < attributes.length;i++){
            if (attributes[i].name != "id") {
                freezeTable.setAttribute(attributes[i].name, attributes[i].value);
            }
        }

        freezeTable.style.width = obj.table.clientWidth + 'px';
        freezeTable.style.margin = "0px";
        freezeHeader.innerHTML = obj.header.innerHTML;

        obj.container.appendChild(freezeTable);
        obj.container.querySelector('table').appendChild(freezeHeader);

        obj.container.querySelector('thead').id = '';
        obj.container.querySelector('tr').id = '';
        var arr = Array.prototype.slice.call(obj.container.querySelectorAll('th'));
        arr.forEach(function (th,index) {
            th.id = '';
            th.style.width = document.defaultView.getComputedStyle(obj.table.querySelectorAll('th')[index]).width;
        });

        hideFreeze(obj);
    }

    /**
     * 隐藏固定表头
     */
    function hideFreeze(obj) {
        obj.container.style.visibility = "hidden";
        obj.container.style.height = "0px";
    }

    /**
     * 显示固定表头
     */
    function showFreeze(obj) {
        obj.container.style.visibility = "visible";
        obj.container.style.height = obj.header.clientHeight + 'px';
    }
};



