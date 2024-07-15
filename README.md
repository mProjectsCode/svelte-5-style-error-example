# Svelte 5 css injected error

# Fixed in Svelte 5.0.0-next.184

When using `css: injected`, if a Svelte component is mounted to a detached node and the node is never attached to the DOM or it's attached to the DOM after microtasks have run, an error will be thrown, which stops the component from mounting correctly.

This case works:
1. Mount a Svelte component to a detached node
2. Immediately (without letting microtasks run) attach the detached node to the DOM

This chase errors
1. Mount a Svelte component to a detached node
2. Never attache the node or only after microtasks have run
3. See error
   ```
   Uncaught TypeError: can't access property "querySelector", target is undefined
    append_styles css.js:25
    run_all utils.js:23
    process_micro_tasks task.js:21
    flush_tasks task.js:58
    flush_sync runtime.js:703
    mount render.js:89
    <anonymous> main.ts:9
   ```

See `src/main.ts` for the code.

This example can be started with `bun run dev`.