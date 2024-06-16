
import {Client} from "@notionhq/client"
import  config  from "config"
const notion = new Client({
    
    auth:config.get("NOTION_SECRET")
  })
export default async function create(text, text1){
   const data =  await notion.pages.create({
        parent:{database_id:config.get("NOTION_ID")},
        properties:{
            TextPerson:{
                title:[
                    {text:{
                        content:text
                    }}
                ]
            },
            Date:{
                date:{
                    start:new Date().toISOString(),
                }
            },
            DataPerson:{
                rich_text:[
                    {text:{
                        content:text1
                    }}
                ]
            }
        }
    })
    return data
  }