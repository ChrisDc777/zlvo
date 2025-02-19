import {
  HeartIcon,
  MicIcon,
  MessageSquareIcon,
  UserIcon,
  CalendarIcon,
  ShieldIcon,
  ActivityIcon,
  CloudIcon,
} from "lucide-react";
import { Item, ItemIcon, ItemTitle, ItemDescription } from "../../ui/item";
import { Section } from "../../ui/section";

export default function Items() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
          Everything your health chatbot needs to keep you healthy.
        </h2>
        <div className="grid auto-rows-fr grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <UserIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Personalized Health Assistance
            </ItemTitle>
            <ItemDescription>
              Get tailored advice based on your symptoms and medical history
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <MicIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Voice Interaction
            </ItemTitle>
            <ItemDescription>
              Talk to your AI chatbot for hands-free and interactive health support
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <HeartIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Real-time Health Monitoring
            </ItemTitle>
            <ItemDescription>
              Track vital signs and health metrics in real-time for immediate advice
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <MessageSquareIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Instant Support
            </ItemTitle>
            <ItemDescription>
              Get instant replies and personalized suggestions at any time of the day
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <CalendarIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Health Reminders
            </ItemTitle>
            <ItemDescription>
              Set reminders for medications, appointments, and healthy habits
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <ShieldIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Privacy & Security
            </ItemTitle>
            <ItemDescription>
              All your health data is stored securely and with utmost privacy
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <ActivityIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Exercise Recommendations
            </ItemTitle>
            <ItemDescription>
              Get workout routines based on your fitness level and health goals
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <CloudIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Cloud-based Sync
            </ItemTitle>
            <ItemDescription>
              Sync your health data across devices for continuous monitoring and advice
            </ItemDescription>
          </Item>
        </div>
      </div>
    </Section>
  );
}
