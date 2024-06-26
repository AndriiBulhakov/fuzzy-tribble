import React, { useEffect, useState } from "react"
import tabStyles from "./TabContent.module.css"
import VideoIcon from "./VideoIcon"
import Video from "./Video"

type TabContentProps = {
  tabs: any[]
  activeTab: number
}

type Message = {
  text: string
  time: string
}

function TabContent({ tabs, activeTab }: TabContentProps) {
  const [video, setVideo] = useState<string>(tabs[activeTab].interviewer.video)

  useEffect(() => {
    setVideo(tabs[activeTab].interviewer.video)
  }, [activeTab, tabs])

  return (
    <div className="tab-list w-full px-5">
      <div className={`flex justify-between gap-2 ${tabStyles["tab-content"]}`}>
        <div className="flex lg:basis-[25.614%] sm:basis-[37.642%] xs:basis-full">
          <span className="relative">
            Interviewer
            <VideoIcon
              color="bg-gray-primary"
              className="absolute right-[-0.5rem] top-[50%] translate-y-[-50%] translate-x-[100%]"
            />
          </span>
          <ul>
            <li>
              <Video src={video} key={video} className="w-full" />
            </li>
            {tabs[activeTab].interviewer.messages.map(
              (message: Message, i: number) => {
                return (
                  <li key={i + 1} className="relative">
                    <span>{message.text}</span>
                    <span className="message-time">{message.time}</span>
                  </li>
                )
              }
            )}
          </ul>
        </div>
        <div className="sm:flex lg:basis-[46.503%] sm:basis-[61.222%] xs:basis-[46.503%] xs:hidden">
          <span>Interview Copilot®️</span>
          <ul>
            {tabs[activeTab].copilot.messages.map(
              (message: Message, i: number) => {
                return (
                  <li key={i + 1} className="relative">
                    <span>{message.text}</span>
                    <span className="message-time">{message.time}</span>
                  </li>
                )
              }
            )}
          </ul>
        </div>
        <div className="lg:flex xs:hidden basis-[25.614%]">
          <span>You</span>
          <ul>
            {tabs[activeTab].you.messages.map((message: Message, i: number) => {
              return (
                <li key={i + 1} className="relative">
                  <span>{message.text}</span>
                  <span className="message-time">{message.time}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TabContent
