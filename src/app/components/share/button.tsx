import { config } from "@/src/config/app";
import { IShare } from "./data";
import { FacebookShare, 
         TwitterShare, 
         LinkedinShare, 
         FacebookMessengerShare, 
         EmailShare, 
         RedditShare, 
         TumblrShare 
} from 'react-share-kit';

export function ShareButtons(params: IShare){
    function createShareMessage() {
        return `"${params.title}" ${params.author ? `by ${params.author} ` : ""} — check it out on Blazed One!  
        ${params.url}`;
    }
    return (
        <div>
            <FacebookShare url={params.url} quote={params.title} hashtag={params.hashtag || ""} />
            <TwitterShare url={params.url} title={params.title} hashtags={params.hashtags || []} />
            <LinkedinShare url={params.url} />
            <FacebookMessengerShare
                url={params.url}
                redirectUri={params.url}
                appId={config.fbAppId || ""}
            />
            <EmailShare
                url={params.url}
                subject={params.title}
                body={createShareMessage()}
            />
            <RedditShare url={params.url} />
            <TumblrShare
                url={params.url}
                caption={createShareMessage()}
            />
        </div>
    )
}