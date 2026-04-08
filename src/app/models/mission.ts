export interface Mission {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  launch_date_local: string;
  launch_success: boolean;
  details: string;
  rocket: {
    rocket_name: string;
    rocket_type: string;
    second_stage: {
      payloads: Array<{
        payload_id: string;
        payload_type: string;
        orbit: string;
      }>;
    };
  };
  launch_site: {
    site_name: string;
    site_name_long: string;
  };
  launch_failure_details: {
    reason: string;
  };
  links: {
    mission_patch_small: string;
    article_link: string;
    wikipedia: string;
    video_link: string;
  };
}
