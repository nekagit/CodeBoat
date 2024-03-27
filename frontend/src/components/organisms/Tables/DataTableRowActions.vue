<script setup lang="ts">
import type { Row } from '@tanstack/vue-table';

import type { IBaseColumn } from '@/interfaces/TableInterfaces';

interface DataTableRowActionsProps {
  row: Row<IBaseColumn>
  }
// <template>
//   <DropdownMenu>
//     <DropdownMenuTrigger as-child>
//       <Button
//         variant="ghost"
//         class="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
//       >
//         <DotsHorizontalIcon class="h-4 w-4" />
//         <span class="sr-only">Open menu</span>
//       </Button>
//     </DropdownMenuTrigger>
//     <DropdownMenuContent align="end" class="w-[160px]">
//       <DropdownMenuItem>Edit</DropdownMenuItem>
//       <DropdownMenuItem>Make a copy</DropdownMenuItem>
//       <DropdownMenuItem>Favorite</DropdownMenuItem>
//       <DropdownMenuSeparator />
//       <DropdownMenuSub>
//         <DropdownMenuSubTrigger>types</DropdownMenuSubTrigger>
//         <DropdownMenuSubContent>
//           <DropdownMenuRadioGroup :value="customer.property.type">
//             <DropdownMenuRadioItem v-for="type in types" :key="type.value" :value="type.value">
//               {{ type.name }}
//             </DropdownMenuRadioItem>
//           </DropdownMenuRadioGroup>
//         </DropdownMenuSubContent>
//       </DropdownMenuSub>
//       <DropdownMenuSeparator />
//       <DropdownMenuItem>
//         Delete
//         <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
//       </DropdownMenuItem>
//     </DropdownMenuContent>
//   </DropdownMenu>
</template>