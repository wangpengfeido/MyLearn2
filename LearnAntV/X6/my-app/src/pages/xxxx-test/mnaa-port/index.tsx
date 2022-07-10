import React, { FC, useRef, useEffect } from 'react';
import { Graph } from '@antv/x6';

const ComponentName: FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const graph = useRef<Graph | null>(null);

  useEffect(() => {
    graph.current = new Graph({
      container: container.current || undefined,
      width: 800,
      height: 600,
    });
    graph.current.fromJSON({
      // 节点
      nodes: [
        {
          id: 'node1', // String，可选，节点的唯一标识
          x: 40, // Number，必选，节点位置的 x 值
          y: 40, // Number，必选，节点位置的 y 值
          width: 80, // Number，可选，节点大小的 width 值
          height: 80, // Number，可选，节点大小的 height 值
          label: 'hello', // String，节点标签
          ports: {
            groups: {
              absolutePort: {
                position: 'absolute',
                attrs: {
                  circle: { r: 0 },
                },
              },
            },
            items: [{ id: 'port1', group: 'absolutePort', args: { x: 0, y: 0 } }, { id: 'port2' }],
          },
        },
        {
          id: 'node2', // String，节点的唯一标识
          x: 160, // Number，必选，节点位置的 x 值
          y: 180, // Number，必选，节点位置的 y 值
          width: 80, // Number，可选，节点大小的 width 值
          height: 80, // Number，可选，节点大小的 height 值
          label: 'world', // String，节点标签
          ports: {
            groups: {
              absolutePort: {
                position: 'absolute',
              },
            },
            items: [{ id: 'port1', group: 'absolutePort', args: { x: 0, y: 0 } }, { id: 'port2' }],
          },
        },
      ],
      // 边
      edges: [
        {
          source: { cell: 'node1', port: 'port1' }, // String，必须，起始节点 id
          target: { cell: 'node2', port: 'port2' }, // String，必须，目标节点 id
        },
      ],
    });
  }, []);

  return (
    <div>
      <div ref={container}></div>
    </div>
  );
};

export default React.memo(ComponentName);
