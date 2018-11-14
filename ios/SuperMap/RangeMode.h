//
//  MapControl.h
//  Visualization
//
//  版权所有 （c）2013 北京超图软件股份有限公司。保留所有权利。
//

#ifndef SM_iMobile_RangeMode_h
#define SM_iMobile_RangeMode_h

/** 该类定义了分段专题图的分段方式类型常量。
*  
* 在分段专题图中，做为专题变量的字段或表达式的值按照某种分段方式被分为多个范围段，要素或记录根据其所对应的字段值或表达式值被分配到其中一个分段中，在同一个范围段中要素或记录使用相同的风格进行显示。分段专题图一般用来表示连续分布现象的数量或程度特征，如降水量的分布，土壤侵蚀强度的分布等，从而反映现象在各区域的集中程度或发展水平的分布差异。</P>
* SuperMap iMobile  7C for iOS  产品提供多种分类的方法，包括等距离分段法，平方根分段法，标准差分段法，对数分段法，等计数分段法，以及自定义距离法，显然这些分段方法根据一定的距离进行分段，因而分段专题图所基于的专题变量必须为数值型。</p>
*/
typedef enum {
	
	/**
	* 空分段模式。
	*/
    RM_None = 6,           

/** 等距离分段。
 <p> 等距离分段是根据作为专题变量的字段或表达式的最大值和最小值，按照用户设定的分段数进行相等间距的分段。在等距离分段中，每一段具有相等的长度。
	*/
    RM_EQUALINTERVAL = 0,  

/** 平方根分段。
 <p>平方根分段实质上是对原数据的平方根的等距离分段，其首先取所有数据的平方根进行等距离分段，得到处理后数据的分段点，从而得到原数据的分段方案。所以，按照这种分段方式，也很有可能某个分段中没有数值，即落到该段中的记录或要素为0个。该方法适用于一些特定数据，如最小值与最大值相差比较大时，用等距离分段法可能需要分成很多的段才能区分，用平方根分段方法可以压缩数据间的差异，用较少的分段数却比较准确的进行分段。
 <p>注意：数据中有负数时则不适合这种方法。
	*/
    RM_SQUAREROOT = 1,     

/** 标准差分段。
 <p>标准差分段方法反应了各要素的属性值对其平均值的偏离。该方法首先计算出专题变量的平均值和标准偏差，在此基础上进行分段。标准差分段的每个分段长度都是一个标准差，最中间的那一段以平均值为中心，左边分段点和右边分段点分别于平均值相差0.5个标准差。
 <p>注意：标准差的段数由计算结果决定，用户不可控制。
	*/
    RM_STDDEVIATION	= 2,   

/** 对数分段。
 <p>对数分段方法的实现的原理与平方根分段方法基本相同，所不同的是平方根分段方法是对原数据取平方根，而对数分段方法是对原数据取对数，即对原数据的以10为底的对数值的等距离分段。其首先对原数据所有值的对数进行等距离分段。得到处理后数据的分段点，然后以10为底，这些分段点的值做为指数的幂得到原数据的各分段点的值，从而得到分段方案。适用于最小值与最大值相差很大，用等距离分段不是很理想的情况。对数分段法比平方根分段法具有更高的压缩率，使数据间的差异尺度更小，优化分段结果。</p>
 <p>注意：数据中有负数则不适合这种方法。
	*/
    RM_LOGARITHM = 3,      

/** 等计数分段。
 <p> 在等计数分段中，尽量保证每一段内的对象个数尽可能的相等。这个相等的个数是多少是由用户指定的分段数以及实际的要素个数来决定的，在可以均分的情况下，每段中对象数目应该是一样的，但是当每段对象数据均分时，分段结果的最后几段会多一个对象。比如，有9个对象，分9段的话，每段一个对象；分8段的话，前七段是一个对象，第8段是2个对象；分7段的话，前5段是一个对象，第6段和第7段是2个对象。这种分段方法适合于线形分布的数据。
	*/
    RM_QUANTILE = 4,       

/** 自定义距离分段。
 <p> 在自定义分段中，由用户指定各段的长度，即间隔距离来进行分段，分段数由 SuperMap 根据指定的间隔距离以及专题变量的最大和最小值来计算。
   */
    RM_CUSTOMINTERVAL = 5, 
}RangeMode;
#endif
