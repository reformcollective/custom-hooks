# Hooks

### usePrevious

```
import { useRef, useEffect } from 'react'

export const usePrevious = (value: any) => {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
```

used to capture the previous value of a variable.  Handy for comparison with the new value within a useEffect.