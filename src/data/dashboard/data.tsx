import type { ColumnsType } from "antd/es/table";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";

export const dataProgress: Progress[] = [
  {
    id: 1,
    title: "Email Statistics",
    content: "Last Campaign Performance",
    statistical: 60,
    icon: "ScheduleOutlined",
    state: " Number of emails sent",
  },
  {
    id: 2,
    title: "New Visitators",
    content: "Out Of Total Number",
    statistical: 34,
    icon: "ScheduleOutlined",
    state: " Campaign sent 2 days ago",
  },
  {
    id: 3,
    title: "Orders",
    content: "Hiệu Suất Chiến Dịch Cuối Cùng",
    statistical: 80,
    icon: "ScheduleOutlined",
    state: "Updated 3 minutes ago",
  },
  {
    id: 4,
    title: "Subscriptions",
    content: "Our Users",
    statistical: 11,
    icon: "ScheduleOutlined",
    state: "Total users",
  },
];

export const columnsGlobalglobalStatistics: ColumnsType<DataType> = [
  {
    dataIndex: "flag",
  },
  {
    dataIndex: "name",
  },
  {
    dataIndex: "quantity",
  },
  {
    dataIndex: "ratio",
  },
];

export const dataGlobalglobalStatistics: DataType[] = [
  {
    key: 1,
    flag: "US",
    name: "USA",
    quantity: 2.92,
    ratio: 53.23,
  },
  {
    key: 2,
    flag: "GE",
    name: "Germany",
    quantity: 1.3,
    ratio: 53.23,
  },
  {
    key: 3,
    flag: "AU",
    name: "Australia",
    quantity: 760,
    ratio: 53.23,
  },
  {
    key: 4,
    flag: "UN",
    name: "United Kingdoma",
    quantity: 690,
    ratio: 53.23,
  },
  {
    key: 5,
    flag: "RO",
    name: "Romania",
    quantity: 600,
    ratio: 53.23,
  },
  {
    key: 6,
    flag: "BR",
    name: "Brasil",
    quantity: 550,
    ratio: 4.34,
  },
];

export const columnsTask: ColumnsType<Tasks> = [
  {
    dataIndex: "img",
    // render: (text: string) => <a>{text}</a>,
  },
  {
    dataIndex: "content",
  },
  {
    dataIndex: "iconEdit",
  },
  {
    dataIndex: "iconDelete",
  },
];

export const dataTask: Tasks[] = [
  {
    key: 1,
    img: "a",
    content: 'Sign contract for "What are conference organizers afraid of?"',
    iconEdit: <EditOutlined />,
    iconDelete: <CloseOutlined />,
  },
  {
    key: 2,
    img: "a",
    content: 'Sign contract for "What are conference organizers afraid of?"',
    iconEdit: <EditOutlined />,
    iconDelete: <CloseOutlined />,
  },
  {
    key: 3,
    img: "a",
    content: 'Sign contract for "What are conference organizers afraid of?"',
    iconEdit: <EditOutlined />,
    iconDelete: <CloseOutlined />,
  },
  {
    key: 4,
    img: "a",
    content: 'Sign contract for "What are conference organizers afraid of?"',
    iconEdit: <EditOutlined />,
    iconDelete: <CloseOutlined />,
  },
];
