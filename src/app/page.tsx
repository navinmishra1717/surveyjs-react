'use client';
import React, { useCallback } from 'react';

import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { UserJson } from '../survey/userDetails';

export default function Home() {
  const survey = new Model(UserJson);

  const alertResults = useCallback((sender: any) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}
