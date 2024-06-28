/**
 * 地图统计
 * 图表参考文档
 * @link https://l7.antv.antgroup.com/examples/heatmap/grid/#grid_world
 * @link https://l7.antv.antgroup.com/examples/point/bubble/#scatter
 * @link https://github.com/ant-design/ant-design-pro/blob/v6-all-block/src/pages/dashboard/monitor/components/Map/index.tsx
 */

import {
  HeatmapLayer,
  HeatmapLayerProps,
  LarkMap,
  LarkMapProps,
  PointLayer,
  PointLayerProps,
  ZoomControl,
} from '@antv/larkmap';
import { useRequest } from 'ahooks';
import { Avatar, Card, Col, List, Row, Spin } from 'antd';
import { ThemeProvider } from 'antd-style';
import React, { useEffect } from 'react';

type AreaDataType = {
  name: string;
  code: string;
  value: number;
};

// 地区排名数据
const areaData: AreaDataType[] = [
  {
    name: 'China',
    code: 'cn',
    value: 10,
  },
  {
    name: 'United States',
    code: 'us',
    value: 10,
  },
  {
    name: 'Germany',
    code: 'de',
    value: 10,
  },
  {
    name: 'Canada',
    code: 'ca',
    value: 10,
  },
  {
    name: 'Brazil',
    code: 'br',
    value: 10,
  },
  {
    name: 'Türkiye',
    code: 'tr',
    value: 10,
  },
  {
    name: 'Spain',
    code: 'es',
    value: 10,
  },
];

// 地图选项
const mapOptions: LarkMapProps = {
  mapType: 'Map',
  mapOptions: {
    style: 'blank',
    center: [110, 10],
    zoom: 0,
  },
  logoVisible: false,
  style: {
    height: 300,
  },
};

// 热力图选项
const heatmapOptions: Omit<HeatmapLayerProps, 'source'> = {
  autoFit: true,
  shape: 'hexagon',
  active: false,
  color: '#aaa',
  style: {
    coverage: 0.7,
    opacity: 0.8,
  },
};

// 气泡图选项
const pointOptions: Omit<PointLayerProps, 'source'> = {
  shape: 'circle',
  animate: true,
  active: true,
  size: 32,
  color: '#EE1C25',
  autoFit: true,
};

const UserGeographyCard: React.FC = () => {
  const fetchData = async (): Promise<Record<'points' | 'grids', string>> => {
    const [points, grids] = await Promise.all([
      fetch(
        'https://gw.alipayobjects.com/os/basement_prod/9078fd36-ce8d-4ee2-91bc-605db8315fdf.csv',
      ).then((d) => d.text()),
      fetch(
        'https://gw.alipayobjects.com/os/bmw-prod/8990e8b4-c58e-419b-afb9-8ea3daff2dd1.json',
      ).then((d) => d.json()),
    ]);

    return {
      points,
      grids,
    };
  };

  const { data, loading } = useRequest(fetchData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ThemeProvider
      theme={{
        components: {
          List: {
            itemPadding: '8px 0',
            avatarMarginRight: 8,
          },
        },
      }}
    >
      <Card bordered={false} title="User Geography" style={{ height: '100%' }}>
        <Row gutter={16}>
          <Col xs={6} xxl={8}>
            <List<AreaDataType>
              split={false}
              dataSource={areaData}
              renderItem={(item) => (
                <List.Item actions={[<span key="ratio">{item.value}%</span>]}>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        size="small"
                        src={`https://flagicons.lipis.dev/flags/1x1/${item.code || 'xx'}.svg`}
                      />
                    }
                    title={item.name}
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col xs={18} xxl={16}>
            {loading ? (
              <Spin />
            ) : (
              <LarkMap {...mapOptions}>
                <HeatmapLayer
                  {...heatmapOptions}
                  source={{
                    data: data?.grids,
                    transforms: [
                      {
                        type: 'hexagon',
                        size: 800000,
                        field: 'capacity',
                        method: 'sum',
                      },
                    ],
                  }}
                />
                <PointLayer
                  {...pointOptions}
                  source={{
                    data: data?.points,
                    parser: {
                      type: 'csv',
                      x: 'Longitude',
                      y: 'Latitude',
                    },
                  }}
                />
                <ZoomControl />
              </LarkMap>
            )}
          </Col>
        </Row>
      </Card>
    </ThemeProvider>
  );
};

export default UserGeographyCard;
