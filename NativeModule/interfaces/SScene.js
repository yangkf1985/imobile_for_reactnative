import {
    NativeModules,
    DeviceEventEmitter,
    NativeEventEmitter,
    Platform
} from 'react-native'
import {
    EventConst
} from '../constains'
import SSceneTool from './SSceneTool'
let SScene = NativeModules.SScene
const nativeEvt = new NativeEventEmitter(SScene);
export default (function () {
    /**
     * 打开工作空间
     * @param infoDic
     * @returns {Promise}
     */
    function openWorkspace(infoDic) {
        try {
            const type = infoDic.server.split('.').pop()
            Object.assign(infoDic, {
                type: getWorkspaceType(type)
            })
            return SScene.openWorkspace(infoDic)
        } catch (e) {
            console.error(e)
        }
    }

    function openMap(name) {
        try {
            return SScene.openMap(name)
        } catch (error) {
            console.log(error)
        }
    }

    function getMapList() {
        try {
            return SScene.getMapList()
        } catch (error) {
            console.log(error)
        }
    }

    function getLayerList() {
        try {
            return SScene.getLayerList()
        } catch (error) {
            console.log(error)
        }
    }

    function getTerrainLayerList() {
        try {
            return SScene.getTerrainLayerList()
        } catch (error) {
            console.log(error)
        }
    }

    function setTerrainLayerListVisible(name, value) {
        try {
            return SScene.setTerrainLayerListVisible(name, value)
        } catch (error) {
            console.log(error)
        }
    }

    function setVisible(name, value) {
        try {
            return SScene.setVisible(name, value)
        } catch (error) {
            console.log(error)
        }
    }

    function setSelectable(name, value) {
        try {
            return SScene.setSelectable(name, value)
        } catch (error) {
            console.log(error)
        }
    }

    function closeWorkspace() {
        try {
            return SScene.closeWorkspace()
        } catch (error) {
            console.log(error)
        }
    }

    function getFlyRouteNames() {
        try {
            return SScene.getFlyRouteNames()
        } catch (error) {
            console.log(error)
        }
    }

    function setPosition(index) {
        try {
            return SScene.setPosition(index)
        } catch (error) {
            console.log(error)
        }
    }

    function flyStart() {
        try {
            return SScene.flyStart()
        } catch (error) {
            console.log(error)
        }
    }

    function flyPause() {
        try {
            return SScene.flyPause()
        } catch (error) {
            console.log(error)
        }
    }

    function flyPauseOrStart() {
        try {
            return SScene.flyPauseOrStart()
        } catch (error) {
            console.log(error)
        }
    }

    function flyStop() {
        try {
            return SScene.flyStop()
        } catch (error) {
            console.log(error)
        }
    }

    function getFlyProgress(handlers) {
        try {
            if (Platform.OS === 'ios' && handlers) {
                if (typeof handlers.callback === 'function') {
                    nativeEvt.addListener(EventConst.SSCENE_FLY, function (e) {
                        handlers.callback(e)
                    })
                }
            } else if (Platform.OS === 'android' && handlers) {
                if (typeof handlers.callback === "function") {
                    DeviceEventEmitter.addListener(EventConst.SSCENE_FLY, function (e) {
                        handlers.callback(e);
                    });
                }
            }
            return SScene.getFlyProgress()
        } catch (error) {
            console.log(error)
        }
    }

    function zoom(scale) {
        try {
            return SScene.zoom(scale)
        } catch (error) {
            console.log(error)
        }
    }
    function getAttribute() {
        try {
            // if(typeof handlers.remove==='boolean'&&handlers.remove){
            //     DeviceEventEmitter.removeListener(EventConst.SSCENE_ATTRIBUTE,event)
            //     return
            // }
            return SScene.getAttribute()
        } catch (error) {
            console.log(error)
        }
    }

    function clearAttribute(){
        try {
            return SScene.clearAttribute()
        } catch (error) {
            console.log(error)
        }
    }

    function addListener(handlers){
        let listen
        if (Platform.OS === 'ios' && handlers) {
            if (typeof handlers.callback === 'function') {
                listen= nativeEvt.addListener(EventConst.SSCENE_ATTRIBUTE, function (e) {
                    handlers.callback(e)
                })
            }
        } else if (Platform.OS === 'android' && handlers) {
            if (typeof handlers.callback === "function") {
                listen= DeviceEventEmitter.addListener(EventConst.SSCENE_ATTRIBUTE,function (e) {
                    handlers.callback(e)
                });
            }
        }
        return listen
    }

    function removeOnTouchListener() {
        try {
            return SScene.removeOnTouchListener()
        } catch (error) {
            console.log(error)
        }
    }

    function setHeading(){
        try {
            return SScene.setHeading()
        } catch (error) {
            console.log(error)
        }
    }

    function changeBaseMap(oldLayer,Url,Layer3DType,layerName,imageFormatType,dpi,addToHead){
        try {
            return changeBaseMap(oldLayer,Url,Layer3DType,layerName,imageFormatType,dpi,addToHead)
        } catch (error) {
            console.log(error)
        }

    }

    function clearSelection(){
        try {
            return SScene.clearSelection()
        } catch (error) {
            console.log(error)
        }
    }

    function initsymbol(){
        try {
            return SScene.initsymbol()
        } catch (error) {
            console.log(error)
        }
    }

    function startDrawPoint(){
        try {
            return SScene.startDrawPoint()
        } catch (error) {
            console.log(error)
        }
    }

    function startDrawLine(){
        try {
            return SScene.startDrawLine()
        } catch (error) {
            console.log(error)
        }
    }

    function startDrawArea(){
        try {
            return SScene.startDrawArea()
        } catch (error) {
            console.log(error)
        }
    }
    
    function startDrawText(handlers){
        try {
            if (Platform.OS === 'ios' && handlers) {
                if (typeof handlers.callback === 'function') {
                    nativeEvt.addListener(EventConst.SSCENE_SYMBOL, function (e) {
                        handlers.callback(e)
                    })
                }
            } else if (Platform.OS === 'android' && handlers) {
                if (typeof handlers.callback === "function") {
                    DeviceEventEmitter.addListener(EventConst.SSCENE_SYMBOL, function (e) {
                        handlers.callback(e);
                    });
                }
            }
            return startDrawText()
        } catch (error) {
            console.log(error) 
        }
    }

    function addGeoText(x,y,text){
        try {
            return SScene.addGeoText(x,y,text)
        } catch (error) {
            console.log(error) 
        }
    }

    function symbolback(){
        try {
            return SScene.symbolback()
        } catch (error) {
            console.log(error)
        }
    }

    function clearAllLabel(){
        try {
            return SScene.clearAllLabel()
        } catch (error) {
            console.log(error)
        }
    }
    
    function save(){
        try {
            return SScene.save()
        } catch (error) {
            console.log(error) 
        }
    }

    function back(){
        try {
            return SScene.back()
        } catch (error) {
            console.log(error)
        }
    }


    getWorkspaceType = (type) => {
        var value
        switch (type) {
            case 'SMWU':
            case 'smwu':
                value = 9
                break
            case 'SXWU':
            case 'sxwu':
                value = 8
                break
            case 'SMW':
            case 'smw':
                value = 5
                break
            case 'SXW':
            case 'sxw':
                value = 4
                break
            case 'UDB':
            case 'udb':
                value = 219
                break
            default:
                value = 1
                break
        }
        return value
    }
    let SSceneExp = {
        openWorkspace,
        closeWorkspace,
        setVisible,
        getLayerList,
        getMapList,
        openMap,
        setSelectable,
        getFlyRouteNames,
        setPosition,
        flyStart,
        flyPause,
        flyPauseOrStart,
        flyStop,
        getFlyProgress,
        zoom,
        getAttribute,
        setTerrainLayerListVisible,
        getTerrainLayerList,
        removeOnTouchListener,
        addListener,
        setHeading,
        clearAttribute,
        changeBaseMap,
        clearSelection,
        initsymbol,
        startDrawPoint,
        startDrawLine,
        startDrawArea,
        startDrawText,
        addGeoText,
        symbolback,
        clearAllLabel,
        save,
        back,
    }
    Object.assign(SSceneExp, SSceneTool)
    return SSceneExp
})()