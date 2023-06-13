import React from "react";
import Tree, { CustomNodeElementProps } from "react-d3-tree";

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
  name: "CEO",
  children: [
    {
      name: "Manager",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Assembly",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Assembly",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Assembly",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
      ],
    },
    {
      name: "Manager",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Assembly",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
      ],
    },
  ],
};

interface nodeProps extends CustomNodeElementProps {
  foreignObjectProps: {
    width: number;
    height: number;
    x: number;
    y: number;
  };
}

const Node = ({ nodeDatum, toggleNode, foreignObjectProps }: nodeProps) => {
  return (
    <g
      // key={nodeDatum.__rd3t.id}
      onClick={() => toggleNode()}
      style={{ background: "red" }}
      className="w-6 h-6 text-black bg-red-300"
    >
      {/* Links to documentation */}
      {/* https://codesandbox.io/s/rd3t-v2-custom-svg-tag-1bq1e?file=/src/App.js */}
      {/* https://bkrem.github.io/react-d3-tree/docs/ */}
      {/* <circle r={20}></circle> */}
      <foreignObject {...foreignObjectProps}>
        <div title="hello" className="bg-red-300 rounded-full w-fit">
          {" "}
          <div className="w-12 h-12">
            <img
              src="https://images.pexels.com/photos/16971540/pexels-photo-16971540/free-photo-of-woman-standing-with-gray-horse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
      </foreignObject>
    </g>
  );
};
export default function OrgChartTree() {
  const nodeSize = { x: 80, y: 80 };
  const foreignObjectProps = {
    width: 100,
    height: 100,
    x: -25,
    y: -25,
  };
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div className="h-screen p-20">
      <Tree
        renderCustomNodeElement={(rd3tProps) =>
          Node({ ...rd3tProps, foreignObjectProps })
        }
        pathFunc={"elbow"}
        depthFactor={70}
        translate={{ x: 300, y: 200 }}
        orientation="vertical"
        nodeSize={nodeSize}
        data={orgChart}
        draggable
        collapsible={false}
      />
    </div>
  );
}
