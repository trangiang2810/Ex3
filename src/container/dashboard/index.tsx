import React from "react";
import { Layout, Progress } from "antd";
import {
  CalendarOutlined,
  GlobalOutlined,
  SyncOutlined,
  DollarOutlined,
  HeartOutlined,
  ClockCircleOutlined,
  BranchesOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.scss";
import { dataProgress } from "../../data/dashboard/data";
import { Table, Divider } from "antd";
import type { ColumnsType } from "antd/es/table";

const columns: ColumnsType<DataType> = [
  {
    dataIndex: "icon",
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

const data: DataType[] = [
  {
    key: 1,
    icon: "US",
    name: "USA",
    quantity: 2.92,
    ratio: 53.23,
  },
  {
    key: 2,
    icon: "GE",
    name: "Germany",
    quantity: 1.3,
    ratio: 53.23,
  },
  {
    key: 3,
    icon: "AU",
    name: "Australia",
    quantity: 760,
    ratio: 53.23,
  },
  {
    key: 4,
    icon: "UN",
    name: "United Kingdoma",
    quantity: 690,
    ratio: 53.23,
  },
  {
    key: 5,
    icon: "RO",
    name: "Romania",
    quantity: 600,
    ratio: 53.23,
  },
  {
    key: 6,
    icon: "BR",
    name: "Brasil",
    quantity: 550,
    ratio: 4.34,
  },
];
const Product: React.FC = () => {
  return (
    <Layout className={styles.container}>
      <div className={styles.wrapperOne}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.icon}>
              <GlobalOutlined />
            </div>
            <div className={styles.content}>
              <span>Capacity</span>
              <span>150GB</span>
            </div>
          </div>
          <hr />
          <div className={styles.state}>
            <SyncOutlined />
            <span>Update Now</span>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.icon}>
              <DollarOutlined />
            </div>
            <div className={styles.content}>
              <span>Revenue</span>
              <span>$ 1,345</span>
            </div>
          </div>
          <hr />
          <div className={styles.state}>
            <CalendarOutlined />
            <span> Last day</span>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.icon} style={{ color: "#fd7e14" }}>
              <BranchesOutlined />
            </div>
            <div className={styles.content}>
              <span>Errors</span>
              <span>23</span>
            </div>
          </div>
          <hr />
          <div className={styles.state}>
            <ClockCircleOutlined />
            <span>In the last hour</span>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.icon} style={{ color: "#41b0dc " }}>
              <HeartOutlined />
            </div>
            <div className={styles.content}>
              <span>Followers</span>
              <span>+45K</span>
            </div>
          </div>
          <hr />
          <div className={styles.state}>
            <SyncOutlined />
            <span> Update now</span>
          </div>
        </div>
      </div>

      {/* table  */}
      <div className={styles.containerGlobalglobalStatistics}>
        <h2>Global Sales by Top Locations</h2>
        <p>All Products That Were Shipped</p>
        <div className={styles.globalglobalStatistics}>
          <div className={styles.table}>
            <Table columns={columns} dataSource={data} size="middle" />
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.767839291862!2d105.87135977963032!3d21.00194139413708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac01aeb6f69f%3A0x9b77a51b2193fa22!2zMTE1IFbEqW5oIFR1eSwgVsSpbmggUGjDuiwgSGFpIELDoCBUcsawbmcsIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1679913896934!5m2!1sen!2s"
              // width="600"
              // height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles.containerProgress}>
        {dataProgress.map(({ id, title, state, icon, statistical }) => (
          //   return (
          <div key={id} className={styles.progressItems}>
            <div className={styles.cartHeader}>
              <h5>{title}</h5>
              <p>Last Campaign Performanc</p>
            </div>
            {/* <Progress type="circle" percent={statistical} /> */}
            <div className={styles.chart}>
              <Progress
                type="circle"
                percent={statistical}
                strokeColor={{ "0%": "#45ccee", "100%": "#dc2d2d" }}
              />
            </div>
            <div className={styles.cartFooter}>
              <div className={styles.legend}>
                {/* <div className=""></div> */}
                <span>Open</span>
              </div>
              <hr />
              <div className={styles.stats}>
                <CalendarOutlined />
                <span>{state}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Product;
