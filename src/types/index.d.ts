import { ImageSourcePropType } from "react-native";
import { FeaturedCard } from "@/src/components/featured-card";

export interface UseAppwriteOptions<
  T,
  P extends Record<string, string | number>
> {
  fn: (params: P) => Promise<T>;
  params?: P;
  skip?: boolean;
}

export interface UseAppwriteReturn<T, P> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: (newParams: P) => Promise<void>;
}

export interface User {
  $id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface GlobalContextType {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  refetch: (newParams?: Record<string, string | number>) => Promise<void>;
}

export interface TabProps {
  focused: boolean;
  icon: any;
  title: string;
}

export interface SettingsItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: any;
  showArrow?: boolean;
}

export interface CardProps {
  onPress?: () => void;
}

export interface GetPropertiesProps {
  filter: string;
  query: string;
  limit?: number;
}
