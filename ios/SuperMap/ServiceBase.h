//
//  ServiceBase.h
//  Visualization
//
//  版权所有 （c）2013 北京超图软件股份有限公司。保留所有权利。
//

#import <Foundation/Foundation.h>

/// iServer 所有服务的基类。
@interface ServiceBase : NSObject{

    NSOperationQueue *_mOperationQueque;
}

@end
