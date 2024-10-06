// import { Input } from "@/components/ui/input";
import { ModeToggle } from "./toggleTheme";
import ProjectComboBox from "./projectComboBox";
import SignIn from "./sign-in";
import MobileClientSheet from "./mobileClientSheet";

const DesktopSidebar = () => {
  return (
    <header className="flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6">
      <MobileClientSheet />
      <ProjectComboBox />
      <ModeToggle />
      <SignIn />
    </header>
  );
};

export default DesktopSidebar;
