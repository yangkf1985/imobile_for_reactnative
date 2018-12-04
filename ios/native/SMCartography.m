//
//  SMCartography.m
//  Supermap
//
//  Created by xianglong li on 2018/12/3.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "SMCartography.h"
#import "SMap.h"

@implementation SMCartography

+(TextAlignment )getTextAlignment:(NSString*)alignmentText{
    if ([alignmentText isEqualToString:@"TOPLEFT"]) {
        return TA_TOPLEFT;
    }
    if ([alignmentText isEqualToString:@"TOPCENTER"]) {
        return TA_TOPCENTER;
    }
    if ([alignmentText isEqualToString:@"TOPRIGHT"]) {
        return TA_TOPRIGHT;
    }
    if ([alignmentText isEqualToString:@"BASELINELEFT"]) {
        return TA_BASELINELEFT;
    }
    if ([alignmentText isEqualToString:@"BASELINECENTER"]) {
        return TA_BASELINECENTER;
    }
    if ([alignmentText isEqualToString:@"BASELINERIGHT"]) {
        return TA_BASELINERIGHT;
    }
    if ([alignmentText isEqualToString:@"BOTTOMLEFT"]) {
        return TA_BOTTOMLEFT;
    }
    if ([alignmentText isEqualToString:@"BOTTOMCENTER"]) {
        return TA_BOTTOMCENTER;
    }
    if ([alignmentText isEqualToString:@"BOTTOMRIGHT"]) {
        return TA_BOTTOMRIGHT;
    }
    if ([alignmentText isEqualToString:@"MIDDLELEFT"]) {
        return TA_MIDDLELEFT;
    }
    if ([alignmentText isEqualToString:@"MIDDLECENTER"]) {
        return TA_MIDDLECENTER;
    }
    if ([alignmentText isEqualToString:@"MIDDLERIGHT"]) {
        return TA_MIDDLERIGHT;
    }
    return TA_TOPLEFT;
}

+(Geometry *)getGeoText:(Recordset *)recordset{
    @try{
        if (recordset != nil && recordset.recordCount > 0) {
            [recordset moveFirst];
            Geometry* geometry = recordset.geometry;
            if (geometry != nil) {
                if(geometry.getType == GT_GEOTEXT)
                {
                    return geometry;
                }
            }
            return nil;
        }
    }
    @catch(NSException *exception){
        @throw exception;
    }
}
+(Recordset *)getRecordset:(int )geometryID layerName:(NSString *)layerName{
    @try{
        MapControl *mapControl = [SMap singletonInstance].smMapWC.mapControl;
        Layers *layers = mapControl.map.layers;
        Layer *layer = [layers getLayerWithName:layerName];
        if (layer != nil && [layer.dataset isKindOfClass:[DatasetVector class]]) {
            DatasetVector *datasetVector = (DatasetVector *)layer.dataset;
            NSNumber * number = [NSNumber numberWithInt:geometryID];
            NSArray * array = [NSArray arrayWithObject:number];
            return [datasetVector queryWithID:array Type:DYNAMIC];
        }
        return nil;
    }
    @catch(NSException *exception){
        @throw exception;
    }
}
+(LayerSettingGrid *)getLayerSettingGrid:(NSString*)layerName{
    @try{
        Layer *layer = [self getLayerByName:layerName];
        if (layer != nil && layer.theme == nil) {
            if(layer.layerSetting != nil && layer.layerSetting.layerType == GRID)
            {
                layer.editable = true;
                return (LayerSettingGrid* )layer.layerSetting;
            }
            else
            {
                return nil;
            }
        }
    }
    @catch(NSException *exception){
        @throw exception;
    }
}
+(LayerSettingVector *)getLayerSettingVector:(NSString*)layerName{
    @try{
        Layer *layer = [self getLayerByName:layerName];
        if (layer != nil && layer.theme == nil) {
            if(layer.layerSetting != nil && layer.layerSetting.layerType == VECTOR)
            {
                return (LayerSettingVector* )layer.layerSetting;
            }
            else
            {
                return nil;
            }
        }
    }
    @catch(NSException *exception){
        @throw exception;
    }
}

+(Layer *)getLayerByName:(NSString*)layerName{
    @try{
        MapControl *mapControl = [SMap singletonInstance].smMapWC.mapControl;
        Layers *layers = mapControl.map.layers;
        return [layers getLayerWithName:layerName];
    }
    @catch(NSException *exception){
        @throw exception;
    }
}

+(Layer *)getLayerByIndex:(int)layerIndex{
    @try{
        MapControl *mapControl = [SMap singletonInstance].smMapWC.mapControl;
        Layers *layers = mapControl.map.layers;
        return [layers getLayerAtIndex:layerIndex];
    }
    @catch(NSException *exception){
        @throw exception;
    }
}

@end
