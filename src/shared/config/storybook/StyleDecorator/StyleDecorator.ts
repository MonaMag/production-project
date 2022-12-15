// можно заигнорить, так как это не бизнес код, а хелпер, который нужен для тестов
// eslint-disable-next-line mona-plugin/layer-imports
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';

export const StyleDecorator = (story: () => Story) => story();
