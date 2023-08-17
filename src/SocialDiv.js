import { Button } from "antd";
import {
  UsersDiv,
  SocialShareFacebook,
  AutopostDiv,
  MaxScoreDiv,
  PostPerdayDiv,
  PostGap,
  ScoreRulerDiv,
  MinScoreText
} from "./Component";
import { useState } from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch, Space } from "antd";
import { styled } from "styled-components";
import { Col, Slider,Collapse,Table } from "antd";
import { Input, Drawer } from "antd";
const SocialDiv = () => {


  const [userData, setuserData] = useState([
    {
      name: "kuberan",
      autopost: false,
      score: 2,
      posts: 3,
      gap:3+" hours "+5+" minutes"
    }
  ]);
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };

  const [isChecked, setIsChecked] = useState(userData[0].autopost);

  const handleSwitchChange = (checked) => {
    setIsChecked(checked);
  };

  const [Posts, setPosts] = useState(0);
  const HandlePostChange = (e) => {
    setPosts(e.target.value);
  };
  const [hours,sethours]=useState(0)
  const [minutes,setminutes]=useState(0)
  const handleHours=(e)=>{
    sethours(e.target.value)
  }
  const handleminutes=(e)=>{
    setminutes(e.target.value)
  }

  const HandleSubmit = () => {
    let ChangeData = {
      name: "kuberan",
      autopost: isChecked,
      score: inputValue,
      posts: Posts,
      gap:hours+" hours "+minutes+" minutes"
    }
    setuserData([ChangeData]);
  };
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const items = [
    {
        key: '1',
        label: 'Facebook',
        children: <>
        <AutopostDiv>
            <p>Allow Autopost</p>
            <Switch
              checked={isChecked}
              onChange={handleSwitchChange}
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
            />
          </AutopostDiv>
        {
            isChecked?(
        <SocialShareFacebook>
          <MaxScoreDiv>
        <MinScoreText>Minimum score to auto-post on social media</MinScoreText>
          <ScoreRulerDiv>
            <MinScoreText>{inputValue}</MinScoreText>
          
          <Col span={10}>
            <Slider
              min={1}
              max={5}
              onChange={onChange}
              value={typeof inputValue === "number" ? inputValue : 0}
            />
          </Col>
          </ScoreRulerDiv>
          
        </MaxScoreDiv>
          <PostPerdayDiv>
            <p>Maximum number of posts per day</p>
            <Input width="10px;" onChange={HandlePostChange} />
          </PostPerdayDiv>
          <PostGap>
            <p>Minimum gap between posts</p>
            <Space>
          <Space.Compact block>
            <Input addonBefore="Hours" defaultValue={hours} onChange={handleHours} ></Input>
            <Input addonBefore="minutes" defaultValue={minutes} onChange={handleminutes} ></Input>
          </Space.Compact>
          </Space>
          </PostGap>
          
        </SocialShareFacebook>)
        :("")
        }</>,
      }
];
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name'
        },
        {
          title: 'Auto Post',
          dataIndex: 'autopost',
          render: (text)=> <p>{text.toString()}</p>
        },
        {
          title: 'Minimum score to post',
          dataIndex: 'score'
        },
        {
            title: 'Max number of post per day',
            dataIndex: 'posts'
          },
          {
            title: 'Minimum Gap between post',
            dataIndex: 'gap'
          },
          {
            title: 'Action',
            render: (text) => <Button onClick={showDrawer}>Setting</Button>,
          },]

  return (
    <UsersDiv>

        <Table columns={columns}  dataSource={userData} />

        <Drawer title="Social Share Setting" width={520} placement="right" onClose={onClose} open={open}>
        
        <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />

        <div>
            <Button type="primary" onClick={HandleSubmit}>
              Update
            </Button>
          </div>
        </Drawer>
        <Drawer title="Rewiew Changes" width={520} placement="right" onClose={onClose} open={open}>
            <p>sample</p>
        </Drawer>

    </UsersDiv>
  );
}

export default SocialDiv;
