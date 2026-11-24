import { Fragment } from 'react';

import type { ProjectDiagram } from '@/types';

interface FlowDiagramProps {
  diagram: ProjectDiagram;
}

/** 左から右（スマホでは上から下）へ進む構成図 */
export default function FlowDiagram({ diagram }: FlowDiagramProps) {
  return (
    <figure className="not-prose my-10">
      <div className="flex flex-col items-stretch md:flex-row">
        {diagram.steps.map((step, index) => (
          <Fragment key={step.title}>
            {index > 0 && (
              <div className="flex shrink-0 items-center justify-center gap-2 py-3 text-amber-400 md:w-20 md:flex-col md:gap-1 md:px-1 md:py-0">
                {step.via && <span className="text-center text-xs text-zinc-400">{step.via}</span>}
                <span aria-hidden="true" className="rotate-90 text-lg leading-none md:rotate-0">&rarr;</span>
              </div>
            )}
            <div className="min-w-0 flex-1 rounded-xl border border-zinc-700 bg-zinc-900 p-4">
              <p className="mb-2 font-bold leading-snug text-zinc-100">{step.title}</p>
              <ul className="space-y-1 text-sm leading-relaxed text-zinc-400">
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Fragment>
        ))}
      </div>
      <figcaption className="mt-4 text-center text-sm text-zinc-500">{diagram.caption}</figcaption>
    </figure>
  );
}
