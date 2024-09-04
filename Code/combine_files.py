# import os
# import sys

# def combine_files(src_folder):
#     # Convert Windows-style paths to Unix-style
#     src_folder = os.path.normpath(src_folder)
#     components_folder = os.path.join(src_folder, "Components")
#     output_file = os.path.join(src_folder, "combined.txt")

#     # List of files to combine
#     files_to_combine = []

#     # Add all files from the Components folder
#     for root, _, files in os.walk(components_folder):
#         for file in files:
#             if file.endswith('.jsx'):
#                 files_to_combine.append(os.path.join(root, file))

#     # Add App and index files from the src folder
#     for base_name in ["App", "index"]:
#         for ext in [".js", ".jsx"]:
#             file_name = f"{base_name}{ext}"
#             file_path = os.path.join(src_folder, file_name)
#             if os.path.exists(file_path):
#                 files_to_combine.append(file_path)
#                 break  # If we found a matching file, no need to check other extensions

#     # Combine the contents into a single file
#     with open(output_file, 'w') as outfile:
#         for filepath in files_to_combine:
#             # Convert file path to Unix-style for consistency
#             file_name = os.path.relpath(filepath, src_folder).replace("\\", "/")
#             # Write the file name as a header
#             outfile.write(f"{'='*20} {file_name} {'='*20}\n\n")
            
#             # Write the content of the file
#             with open(filepath, 'r') as infile:
#                 outfile.write(infile.read())
#                 outfile.write("\n\n")
            
#             # Write a separator between files
#             outfile.write(f"{'-'*80}\n\n")
    
#     print(f"All files have been combined into {output_file}")

# if __name__ == "__main__":
#     if len(sys.argv) != 2:
#         print("Usage: python combine_files.py /path/to/src/folder")
#         sys.exit(1)

#     src_folder = sys.argv[1]

#     # Normalize the path and check if it exists
#     src_folder = os.path.normpath(src_folder)
#     if not os.path.exists(src_folder):
#         print(f"The specified path does not exist: {src_folder}")
#         sys.exit(1)

#     combine_files(src_folder)

import os
import sys

def combine_files(src_folder):
    # Convert Windows-style paths to Unix-style
    src_folder = os.path.normpath(src_folder)
    output_file = os.path.join(src_folder, "combined.txt")

    # List of files to combine
    files_to_combine = []

    # Traverse through all subdirectories and files
    for root, _, files in os.walk(src_folder):
        for file in files:
            if file.endswith('.js') or file.endswith('.jsx'):
                # Check if the file is in the src folder or its subdirectories
                if root == src_folder:
                    # Handle specific files in the src folder
                    if file.startswith('App') or file.startswith('index'):
                        files_to_combine.append(os.path.join(root, file))
                else:
                    # Handle files in subdirectories
                    files_to_combine.append(os.path.join(root, file))

    # Combine the contents into a single file
    with open(output_file, 'w', encoding='utf-8') as outfile:
        for filepath in files_to_combine:
            # Convert file path to Unix-style for consistency
            file_name = os.path.relpath(filepath, src_folder).replace("\\", "/")
            # Write the file name as a header
            outfile.write(f"{'='*20} {file_name} {'='*20}\n\n")
            
            # Write the content of the file
            with open(filepath, 'r', encoding='utf-8') as infile:
                try:
                    outfile.write(infile.read())
                except UnicodeDecodeError:
                    print(f"Could not read file: {filepath} due to encoding issues.")
                outfile.write("\n\n")
            
            # Write a separator between files
            outfile.write(f"{'-'*80}\n\n")
    
    print(f"All files have been combined into {output_file}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python combine_files.py /path/to/src/folder")
        sys.exit(1)

    src_folder = sys.argv[1]

    # Normalize the path and check if it exists
    src_folder = os.path.normpath(src_folder)
    if not os.path.exists(src_folder):
        print(f"The specified path does not exist: {src_folder}")
        sys.exit(1)

    combine_files(src_folder)

