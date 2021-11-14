import styled from "styled-components";

type PickerStyleType = {
  type: string
}

const PickerStyle = styled.div<PickerStyleType>`

`

type PickerProps = {
  // primary?: boolean;
  type: string;
  // onClick?: () => void;
}

export const Picker = ({
  type,
  ...props
}: PickerProps) => {

  const pickerContentList = () => {
    // switch(type){
    //   case "what":
    //     return [
    //       {value:"ScenicSpot",name:"景點"},
    //       {value:"Restaurant",name:"美食"},
    //       {value:"Hotel",name:"住宿"},
    //       {value:"Activity",name:"活動"}
    //     ]
    //   case "where":
    //     return [
    //       {"北":[{}]},
    //       {"中":[{}]},
    //       {"南":[{}]},
    //       {"東":[{}]},
    //       {"離島":[{}]}
    //     ]
    //   default:
    //     return []
    // }
  }

  return (
    <PickerStyle type={type}>

    </PickerStyle>
  )

}