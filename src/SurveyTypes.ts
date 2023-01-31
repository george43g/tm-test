export interface Survey {
  name: string;
  id: number;
  participant_count: number;
  submitted_response_count: number;
  questions: Question[];
}

export interface Question {
  id: number;
  description: string;
  question_type: string;
  survey_responses: SurveyResponse[];
}

export interface SurveyResponse {
  id: number;
  question_id: number;
  respondent_id: number;
  response_content: string;
}
