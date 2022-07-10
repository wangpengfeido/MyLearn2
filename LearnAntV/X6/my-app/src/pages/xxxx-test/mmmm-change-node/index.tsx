import React, { FC, useRef, useEffect } from 'react';
import { Graph } from '@antv/x6';

const ComponentName: FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const graph = useRef<Graph | null>(null);

  useEffect(() => {
    const data = {
      // 节点
      nodes: [
        {
          id: 'node1', // String，可选，节点的唯一标识
          x: 40, // Number，必选，节点位置的 x 值
          y: 40, // Number，必选，节点位置的 y 值
          width: 80, // Number，可选，节点大小的 width 值
          height: 40, // Number，可选，节点大小的 height 值
          label: 'hello', // String，节点标签
        },
        {
          id: 'node2', // String，节点的唯一标识
          x: 160, // Number，必选，节点位置的 x 值
          y: 180, // Number，必选，节点位置的 y 值
          width: 80, // Number，可选，节点大小的 width 值
          height: 40, // Number，可选，节点大小的 height 值
          label: 'world', // String，节点标签
        },
      ],
      // 边
      edges: [
        {
          source: 'node1', // String，必须，起始节点 id
          target: 'node2', // String，必须，目标节点 id
        },
      ],
    };
    graph.current = new Graph({
      container: container.current || undefined,
      width: 800,
      height: 600,
    });
    graph.current.fromJSON(data);
  }, []);

  const handleChange = () => {
    const node1 = graph.current?.getCellById('node1');
    console.log(node1);
    if (node1) {
      node1.updateAttrs({
        text: {
          ...node1.getAttrs().text,
          text: 'aaa',
        },
      });
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleChange}>change</button>
      </div>
      <div ref={container}></div>
    </div>
  );
};

export default React.memo(ComponentName);
